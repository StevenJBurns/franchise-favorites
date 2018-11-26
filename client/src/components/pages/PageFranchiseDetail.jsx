import React from "react";

import { AppContext } from "../app/App.jsx";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./PageFranchiseDetail.css";


class PageFranchiseDetail extends React.Component {
  constructor(props) {
    super(props);

    this.grid = 8;
    this.state = {
      items: []
    };
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) return;

    const items = this.reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({ items });
  };

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: this.grid,
    width: 250,
  });

  getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: this.grid * 2,
    margin: `0 0 ${this.grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
  });

  render() {
    return (
      <AppContext.Consumer>
        {
        ({ user, franchises}) => (
          franchises.selected && 
            <main>
              { !user.isAuthenticated && <h2 id="h2-not-authorized">YOU NEED TO LOG IN</h2> }
              <h2>{franchises.selected.title}</h2>
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {
                  (provided, snapshot) => (
                    <ul id="ul-franchise-movies" ref={provided.innerRef} style={this.getListStyle(snapshot.isDraggingOver)}>
                      {
                        franchises.selected.movies.map((movie, index) => (
                          <Draggable key={movie.key} draggableId={movie.key} index={index}>
                            {
                            (provided, snapshot) => (
                              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={this.getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>{movie.title}</li>
                            )
                            }
                          </Draggable>
                       ))
                      }
                      {provided.placeholder}
                    </ul>
                    )
                  }
                </Droppable>
              </DragDropContext>
            </main>
          )
        }
      </AppContext.Consumer>
    );
  }

};

export default PageFranchiseDetail;

import React from "react";

import { AppContext } from "../app/App.jsx";

/* Font Awesome! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./PageFranchiseDetail.css";


class PageFranchiseDetail extends React.Component {
  constructor(props) {
    super(props);

    this.grid = 8;
    this.state = {
      franchises: []
    };
  }

  goBack = (e) => {
    e.stopPropagation();
    this.props.history.push("/franchises");
  }
  onDragEnd = (result) => {
    /* Return immediately if item is dropped outside the list */
    if (!result.destination) return;

    const items = this.reorder(
      this.state.franchises,
      result.source.index,
      result.destination.index
    );

    this.setState({ franchises: items });
  };

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  getListStyle = isDraggingOver => ({
    width: 288,
    margin: `${this.grid * 2}px auto`,
    padding: this.grid,
    borderRadius: "4px",
    background: isDraggingOver ? "#6100BB" : "#450085"
  });

  getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: this.grid * 2,
    margin: `${this.grid}px auto`,
    // change background colour if dragging
    background: isDragging ? "#B15000" : "#FF7300",
    // styles we need to apply on draggables
    ...draggableStyle
  });

  render() {
    return (
      <AppContext.Consumer>
        {
        ({ user, franchises}) => (
          franchises.selected && 
            <main id="main-franchise-detail">
              <span style={{fontSize: "24px", cursor: "pointer"}} onClick={this.goBack}><FontAwesomeIcon icon={faArrowCircleLeft} size="2x" />BACK TO THE FRANCHISE LIST</span>
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
                          {(provided, snapshot) => (<li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={this.getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>{movie.title}</li>)}
                        </Draggable>))
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

PageFranchiseDetail.contextType = AppContext;

export default PageFranchiseDetail;

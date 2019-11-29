import React from 'react';

/* Local Component Imports */
import AppHeader from "./AppHeader.jsx";
import AppMain from "./AppMain.jsx";
import AppNav from "./AppNav.jsx";
import AppFooter from "./AppFooter.jsx";

/* Style and Asset Imports */
import '../../styles/App.css';
import './AppComponents.css';

/* Create a Context API object to be used here as Provider and exported for Consumers */
export const UserContext = React.createContext({
  name: '',
  isAuthenticated: false,
  favorites: [],
});


export const App = () => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [franchiseData, setFranchiseData] = React.useState([]);

  React.useEffect(() => {
    /* fetch the franchise data via the API and store */
    const fetchData = async () => {
      const response = fetch("/api/franchises").then(res => res.json())
      setFranchiseData(response);
    }
    fetchData();
  }, []);

  const register = (e) => {
    e.preventDefault();

  let requestBody = {
    "email": this.state.email,
    "password": this.state.password
  };

    fetch("/auth/register", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(requestBody)
    })
    .then((res) => console.log(res));
  };

  const login = async (email, password) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (localStorage.getItem("jwt_token")) {
      headers['Authorization'] = `Bearer ${localStorage.getItem("jwt_token")}`;
    };
    
    let requestBody = {
      "email": this.state.email,
      "password": this.state.password
    };

    await fetch("/auth/login", {
      method: "POST",
      mode: "cors",
      headers: headers,
      cache: "no-cache",
      credentials: "same-origin",
      body: JSON.stringify(requestBody)
    })
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);

      return res.json();
    })
    .then(body => {
      localStorage.setItem("jwt_token", body.token);
      console.log(this.isTokenExpired());

    })
    .catch(err => {
      this.setState({ fetchError: true });
      console.error(err);
    });
  };

  const logout = (e) => {
    console.log("Logging out");
    localStorage.setItem("jwt_token", null);
    setCurrentUser({
      name: null,
      favorites: [],
      isAuthenticated: false,
    });
  };

  const updateUser = (userEmail, favorites, isAuthenticated) => {
    setCurrentUser({
      name: userEmail,
      favorites: [],
      isAuthenticated: true,
    });
  };

  const changeFranchise = (selectedFranchise) => {
    this.setState({ franchises: { ...this.state.franchises, selected: selectedFranchise }});
  };

  const setFavoritesList = (arrFavoriteList) => {
    let objFavoriteList = { ...arrFavoriteList };

    console.log("objFavoriteList: ", objFavoriteList);

    this.setState({...this.state, currentUser: {...this.state.currentUser, favorites: {...this.state.currentUser.favorites, objFavoriteList}}})
  };

  const values = {
    user: currentUser.name,
    franchises: franchiseData,
    updateUser: updateUser,
    changeFranchise: changeFranchise,
    setFavoritesList: setFavoritesList,
    logout: logout
  };

  return (
    <React.Fragment>
      <UserContext.Provider value={values}>
        <AppHeader />
        <AppNav />
        <AppMain updateUser={updateUser} changeFranchise={changeFranchise} setFavoritesList={setFavoritesList} />
        <AppFooter />
      </UserContext.Provider>
    </React.Fragment>
  );
};

export default App;

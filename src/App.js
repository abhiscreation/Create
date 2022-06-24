import React, { useEffect, useState } from "react"
import Login from "./admin_panel/login"
import AdminDashboard from "./admin_panel/dashboard"
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import BasicTable from "./admin_panel/table"
import Home from "./client_panel/home"
import About from "./client_panel/about"
import Service from "./client_panel/Service"
import Contact from "./client_panel/contact"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./client_panel/footer"
import "bootstrap/dist/js/bootstrap.bundle"; 
import './index.css';

function App(props) {
  const [ user, setLoginUser] = useState({})
  useEffect(() => {
    setLoginUser(JSON.parse( localStorage.getItem("MyUser")))
  },[])
  const updateUser=(user)=>{
localStorage.setItem("MyUser",JSON.stringify(user))
setLoginUser(user)
  }
  return (
   <div className="App">
  
  <Router>
    <Switch>
    <Route exact path="/login">
            {
              user && user._id ? <AdminDashboard updateUser={ updateUser} /> : <Login  updateUser={ updateUser}/>
            }
          </Route>
          <Route path="/log">
            <Login  updateUser={ updateUser}/>
          </Route>
          <Route path="/table"><BasicTable/> </Route>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/service" component={Service}/>
          <Route exact path="/contact" component={Contact}/>
  </Switch>
  </Router>
   </div>
  );
}

export default App;
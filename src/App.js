import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <Login /> */}
            {/* <Register /> */}
          </Route>
          {/* <Route path="/users">
                            <UserList/>
                        </Route>
                        <Route path="/user/:userId">
                            <User/>
                        </Route>
                        <Route path="/newUser">
                            <NewUser/>
                        </Route>
                        <Route path="/products">
                            <ProductList/>
                        </Route>
                        <Route path="/product/:productId">
                            <Product/>
                        </Route>
                        <Route path="/newProduct">
                            <NewProduct/>
                        </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

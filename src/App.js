import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Carousels from './Components/Carousels/Carousels';
import AddServices from './Components/AddServices/AddServices';
import Error from './Components/Error/Error';
import Booking from './Components/Booking/Booking';
import AuthProvider from './Components/Context/AuthProvider';

import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Account/Login';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import MyOrder from './Components/MyOrder/MyOrder';
import AllOrder from './Components/AllOrder/AllOrder';
import AllOrderService from './Components/AllOrder/AllOrderService';
import MyOrderData from './Components/MyOrderData/MyOrderData';

function App() {
  return (
    <div className="App">
      {/* <button className="btn btn-success"> Hello</button> */}
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Carousels></Carousels>
            </Route>
            <Route path="/home">
              <Carousels></Carousels>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addservices">
              <AddServices></AddServices>
            </PrivateRoute>
            {/* <PrivateRoute path="/myorder">
              <MyOrderData></MyOrderData>
            </PrivateRoute> */}
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/allorder">
              <AllOrder></AllOrder>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/contact">
              <About></About>
            </Route>

            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

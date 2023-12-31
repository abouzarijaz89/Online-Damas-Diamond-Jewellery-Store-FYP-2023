import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductCreateScreen from "./screens/ProductCreateScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import CategoryScreen from "./screens/CategoryScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from "./screens/SupportScreen";
import ProductByCategoryScreen from "./screens/ProductByCategoryScreen";
import SearchScreen from "./screens/SearchScreen";
import AboutScreen from "./screens/AboutScreen";
import TermScreen from "./screens/TermScreen";
import HelpScreen from "./screens/HelpScreen";
import PrivacyScreen from "./screens/PrivacyScreen";
import RequiredProductScreen from "./screens/RequiredProductScreen";
import Requestlistscreen from "./screens/Requestlistscreen"
import StripeScreen from "./screens/StripeScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
       
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/admin/category" component={CategoryScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/term" component={TermScreen} />
          <Route path="/help" component={HelpScreen} />
          <Route path="/privacy" component={PrivacyScreen} />
          <Route path="/required" component={RequiredProductScreen} />
          <Route path="/StripeScreen" component={StripeScreen} />

          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/requestlist"
            component={Requestlistscreen}
            exac
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/category/:id/page/:pageNumber"
            component={ProductByCategoryScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/product/create" component={ProductCreateScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          {/* <Route path="/search/:keyword" component={HomeScreen} exact />
          <Route path="/page/:pageNumber" component={HomeScreen} exact /> */}
          {/* <Route
            path="/search/:keyword/page/:pageNumber"
            component={HomeScreen}
            exact
          /> */}
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <Route path="/admin/dashboard" component={DashboardScreen} />
          <Route path="/admin/support" component={SupportScreen} />
          <Route path="/" component={HomeScreen} exact />
          
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

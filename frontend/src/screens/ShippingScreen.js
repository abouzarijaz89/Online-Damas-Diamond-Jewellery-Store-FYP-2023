import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber);
  const [zipcode, setZipCode ] = useState(shippingAddress.zipcode);
  const [city, setCity ] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if(address.trim().length<10)
    {
      alert("Empty Space not allowed in Address Field")
    }
    else{

      dispatch(saveShippingAddress({ address, phoneNumber, zipcode }));
      history.push("/payment");
    }
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            minLength={10}
            maxLength={30}
            value={address}
            required
            // pattern="^(\d|\w)+$"
            title="should not include spaces and special characters"
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your City"
            minLength={6}
            value={city}
            pattern="^(\d|\w)+$"
            title="should not include spaces and special characters"
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Country"
            minLength={3}
            value={country}
            pattern="^(\d|\w)+$"
            title="should not include spaces and special characters"
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group> */}
        



        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter Phone Number"
            minLength={11}
            value={phoneNumber}
            pattern="^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$"
            title="Please enter number in format e.g. +923367966034"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        

        {/* <Form.Group controlId="ZipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter zip code"
            value={zipcode}
            minLength={5}
            pattern={"[0-9]{5}"}
            required
            onChange={(e) => setZipCode(e.target.value)}
          ></Form.Control>
        </Form.Group> */}

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;

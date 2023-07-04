import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listLastestProducts } from "../actions/productActions";
import axios from "axios";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const [customCategories, setCustomCategories] = useState([])

  // const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productLastestList = useSelector((state) => state.productLastestList);
  const { loading, error, products, page, pages } = productLastestList;

  const getCustomCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products/custom")
      setCustomCategories(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dispatch(listLastestProducts());
  }, [dispatch]);

  useEffect(() => {
    getCustomCategories()
  }, [])

  return (
    <>
   
       
      <Meta />
      {!keyword ? (
        <>
          <ProductCarousel />
          <h1>Lastest Products</h1>
        </>
      ) : (
        <h1> Products</h1>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <div className="banner-container">
          <img src={'/images/Mahroze.jpg'} className="banner-image"/>
          </div>

          {customCategories?.map((category) => {
            return <>
            <h1>{category.title}</h1>
            <Row>
            {category.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
            </>
          })}
<row>
{/* <h1 style={{textAlign:"center", fontSize:"Bold"}}>Banner</h1> */}
          <div className="banner-container-one">
          <img src={'/images/banner.jpeg'} className="banner-image"/>
          </div>
</row>
          {/* <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          /> */}
        </>
      )}
    </>
  );
};

export default HomeScreen;

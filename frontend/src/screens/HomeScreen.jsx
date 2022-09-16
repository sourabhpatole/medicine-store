import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    fetchProduct();
  }, []);
  return (
    <>
      <h3>Latest Medicine</h3>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

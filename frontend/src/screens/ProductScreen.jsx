import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Link className="btn btn-dark" to="/">
        Go Home
      </Link>
      <Row>
        <Col md={6} className="mt-4">
          <Image
            src={product.image}
            alt={product.name}
            fluid
            style={{ height: "60vh", width: "50vw", objectFit: "cover" }}
          />
        </Col>
        <Col md={3} className="mt-4">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            <ListGroup.Item>Price: ₹{product.price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>₹ {product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

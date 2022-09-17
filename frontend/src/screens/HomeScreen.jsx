import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const res = await axios.get("/api/products");
    //   setProducts(res.data);
    // };
    // fetchProducts();
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="HomeScreen" style={{ width: "100%" }}>
      <h3>Latest Medicine</h3>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;

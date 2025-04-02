import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredData);

  return (
    <div className="col-lg-3">
      <input type="text" placeholder="Search..." onChange={searchHandler} />
      <div className="row d-flex">
        {filteredData.map((product) => {
          return (
            <div className="card">
              <img
                className="card-img-top"
                src={product.image}
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

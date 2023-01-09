import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link , useParams} from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [user, setUser] = useState([]);
  const { user_id } = useParams();

  useEffect(() => {
    getProducts();
    getUserById();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/product");
    setProduct(response.data);
  };

  const deleteUser = async (id) => {
    try {
    //   await axios.delete(`http://localhost:5000/product/${id}`);
    console.log(id)
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/login/${user_id}`);
    setUser(response.data);
    console.log(user)
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`report`} className="button is-success">
          Report
        </Link>
        &nbsp;
        <Link to={`/login`} className="button is-success">
          Logout
        </Link>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Harga Awal</th>
              <th>Harga Sekarang</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td>{product.price}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    to={`edit/${product.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Detail
                  </Link>
                  <button
                    onClick={() => deleteUser(product.id)}
                    className="button is-small is-danger"
                  >
                    Add To Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;

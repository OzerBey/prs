import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";

export default function ProductList() {
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    // const response = await fetch("https://api.chucknorris.io/jokes/random");
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    // fetchPost();
  }, [posts]);

  return (
    <div>
      <h2>Products in list</h2>
      <h3>{/* {posts.info.title} - {posts.currentCategory} */}</h3>
      <Button onClick={fetchPost} color="success">
        GetProducts
      </Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>ProductName</th>
            <th>CategoryId</th>
            <th>UnitsInStock</th>
            <th>unitPrice</th>
            <th>quantityPerUnit</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.categoryId}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityPerUnit}</td>

              {/* <Button onClick={fetchPost} color="success">
                Add to Cart
              </Button> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

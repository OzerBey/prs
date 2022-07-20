/* eslint-disable jsx-a11y/scope */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";

function PhotoList() {
  const [photos, setPhotos] = useState([]);

  const baseUrl = "https://localhost:44390/api/";
  const fetchPhotos = async () => {
    const response = await fetch(baseUrl + "Photo/GetAllPhotos");
    const data = await response.json();
    // console.log("data here " + data[10].photo1);
    setPhotos(data);
  };

  useEffect(() => {
    // fetchPost();
  }, [photos]);

  return (
    <div>
      <h1>PhotoList</h1>
      <Button onClick={fetchPhotos} color="success">
        GetPhotos
      </Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Photo</th>
            {/* <th>employees</th>
            <th>patients</th> */}
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <th scope="row">{photo.id}</th>
              <td>
                <img
                  className="image"
                  src={require("../photos/person1.png")}
                  alt="photo"
                />
              </td>
              {/* <td>{photo.employees}</td>
              <td>{photo.patients}</td> */}
            </tr>
          ))}

          {/* ///with forEach loop
          {photos.forEach((photo) => (
            <tr key={photo.id}>
              <th scope="row">{photo.id}</th>
              <td>{photo.photo1}</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
}

export default PhotoList;

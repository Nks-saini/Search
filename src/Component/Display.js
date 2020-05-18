import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const axios = require("axios");

export default function Display() {
  const [code, setCode] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(function (response) {
        console.log(response);
        setCode(response.data.results);
      })
      .catch(function (error) {
        console.log("here", error);
      });
  }, []);

  function search(key) {
    console.log("input--", key);
    axios
      .get(`https://rickandmortyapi.com/api/episode?name=${key}`)
      .then(function (response) {
        console.log("code---", response.data.results);
        setCode(response.data.results);
      })
      .catch(function (error) {
        console.log("here", error);
      });
  }

  function next() {
    console.log("next");
    axios
      .get("https://rickandmortyapi.com/api/episode?page=2")
      .then(function (response) {
        console.log(response);
        setCode(response.data.results);
      })
      .catch(function (error) {
        console.log("here", error);
      });
  }

  function prev() {
    console.log("prev");
    axios
      .get("https://rickandmortyapi.com/api/episode?page=1")
      .then(function (response) {
        console.log(response);
        setCode(response.data.results);
      })
      .catch(function (error) {
        console.log("here", error);
      });
  }

  return (
    <div>
      <p>Display the data</p>
      <input type="text" onChange={(event) => search(event.target.value)} />
      <Button variant="success" onClick={() => prev()}>
        Prev
      </Button>
      <Button variant="success" onClick={() => next()}>
        Next
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Episode name</th>
            <th>Date</th>
            <th>Episode code</th>
          </tr>
        </thead>
        <tbody>
          {code.map((p, i) => (
            <tr key={i}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.air_date}</td>
              <td>{p.episode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

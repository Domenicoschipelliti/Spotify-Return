import { useEffect, useState } from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const Responses = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=` + data.id,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("eccolo", res);
          return res.json();
        } else {
          throw new Error("errore nella get");
        }
      })
      .then((dati) => {
        console.log(dati);
        setData(dati.data);
      })
      .catch((err) => {
        throw new Error("nuovo errore", err);
      });
  };
  useEffect(() => {
    Responses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Row>
        {data.map((da) => {
          return (
            <Col md={2} key={da.id}>
              <Figure>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={da.album.cover_medium}
                />
                <Figure.Caption className="text-light">
                  {da.title_short} <i className="bi bi-suit-heart"></i>
                </Figure.Caption>
              </Figure>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default SearchBar;

import { Container, Row, Col } from "react-bootstrap";
import styles from "./Retailers.module.css";

const Retailers = () => {
  const retailers = [
    {
      img: require("../../../images/ardkeen.png"),
      alt: "ardkeen company logo",
    },
    {
      img: require("../../../images/londis.jpeg"),
      alt: "londis company logo",
    },
    {
      img: require("../../../images/cove.jpeg"),
      alt: "cove company logo",
    },
    {
      img: require("../../../images/market.jpeg"),
      alt: "tramore market company logo",
    },
  ];
  return (
    <>
    <h4>Retailers</h4>
      <Container>
        <Row>
          {retailers.map((r) => {
            console.log(r.img);
            return (
              <Col>
                <img className={styles.image} src={r.img} alt={r.alt} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Retailers;

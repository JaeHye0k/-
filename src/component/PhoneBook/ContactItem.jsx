import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  localStorage.setItem(item.name, item.tel);
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
          alt="person"
        />
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.tel}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;

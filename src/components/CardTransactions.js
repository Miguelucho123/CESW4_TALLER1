import React from "react";
import { Card, Badge, Form, Row, Col } from "react-bootstrap";

import ListTransactions from "./ListTransactions";

const CardTransactions = ({ transactions, removeTransaction }) => {
  return (
    <Card border="info" style={{ width: "35rem" }}>
      <Card.Header>
        Movimientos
        <Badge variant="info">{transactions.length}</Badge>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Form.Control type="text" name="buscar" placeholder="buscar" />
          </Col>
          <Col>
            <Form.Check enabled type="radio" label="Todos" id="todos" />
          </Col>
          <Col>
            <Form.Check enabled type="radio" label="Ingreso" id="ingreso" />
          </Col>
          <Col>
            <Form.Check enabled type="radio" label="Gasto" id="gasto" />
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
          
          <ListTransactions
          transactions={transactions}
          removeTransaction={removeTransaction}
        />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardTransactions;

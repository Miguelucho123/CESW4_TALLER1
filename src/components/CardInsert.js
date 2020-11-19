import { React, useState } from "react";
import {
  Card,
  Form,
  ButtonToolbar,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import NumberFormat from "react-number-format";
import { uuid } from "uuidv4";

const CardInsert = ({ salary, updateSalary, addTransaction }) => {
  const [transaction, setTran] = useState({
    id: "",
    tipo: "",
    name: "",
    money: 0,
  });


  const handleNameInputChange = (e) => {
    setTran({
      ...transaction,
      name: e.target.value,
    });
  };

  const handleMoneyInputChange = (e) => {
    setTran({
      ...transaction,
      money: e.target.value,
    });
  };

  const handleTypeSelectChange = (e) => {
    setTran({ ...transaction, tipo: e.target.value });
  };


  const handleSubmitCardInsert = (e) => {
    e.preventDefault();
    console.log(transaction.tipo);
    const dato= salary.map(dato=>dato.quantity)[0];
   
    console.log(dato);
    console.log(transaction.money);

    if (transaction.tipo === "Gasto") {
      const newSalaryCalculated = dato - transaction.money;
      console.log(newSalaryCalculated);
      if (newSalaryCalculated>0) {
        updateSalary(salary.id, newSalaryCalculated);
        if (transaction.name.trim()) {
          addTransaction({ ...transaction, id: uuid() });
        }
      } else {
        console.log("no se pudo");
      }
    }
  };



  return (
    <Card border="info" style={{ width: "19rem" }}>
      <Card.Header>{"Insert"}</Card.Header>
      <Card.Body>
        <Form>
          <Form.Label>Tipo Movimiento: </Form.Label>
          <Form.Group as="select" name="tipo" onChange={handleTypeSelectChange}>
            <option>Seleccionar..</option>
            <option>Ingreso</option>
            <option>Gasto</option>
          </Form.Group>

          <br />
        </Form>
        <Form inline>
          <Form.Label>Nombre: </Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="nombre"
            onChange={handleNameInputChange}
          />
        </Form>
        <br />
        <Form inline>
          <Form.Label>Cantidad: </Form.Label>
          <NumberFormat
            name="money"
            placeholder="valor"
            thousandSeparator={true}
            onChange={handleMoneyInputChange}
          />
        </Form>

        <br />

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button>Cancelar</Button>
              </ButtonGroup>
              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button type="submit" onClick={handleSubmitCardInsert}>
                  Confirmar
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default CardInsert;

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardInsert from "./components/CardInsert";
import CardTransactions from "./components/CardTransactions";
import Navbar from "./components/Navbars";


const App = () => {
  const [transactions, setTtransactions] = useState([]);
  const [salary, setSalary] = useState([]);



const addTransaction= (transaction) =>{
  console.log('hola este es desde el metodo');
  console.log(salary.quantity);
  setTtransactions([...transactions, transaction]);
};

  const addSalary = (newSalary) =>{
    setSalary([...salary, newSalary]);
  };

  const updateSalary = (id, newSalary) => {
    const newSalaryUpdated = salary.map((salar) => {
      if (salar.id === id) {
        return { ...salar, quantity: newSalary };
      }
      return salar;
    });
    setSalary(newSalaryUpdated);
  };

  const removeTransaction = (id) => {
    setTtransactions(transactions.filter((transaction) => transaction.id !== id));
  };
    
 

  return (
    <Container>
      <Navbar addSalary={addSalary}/>
      <br />
      <Row>
        <Col>
          <CardInsert salary={salary} updateSalary={updateSalary} addTransaction={addTransaction} />
        </Col>
        <Col>
          <CardTransactions transactions={transactions} removeTransaction={removeTransaction}/>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

import React, { useState } from 'react';
import './Calculator.css';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap';
import CalculatorService from './Calculator.Service';

function Calculator() {
  const [ calcular, concatNumbers, SUM, SUB, DIV, MULT ] = CalculatorService();

  const [ numbers, setNumbers ] = useState('0');
  const [ number1, setNumber1 ] = useState('0');
  const [ number2, setNumber2 ] = useState(null);
  const [ operation, setOperation ] = useState(null);

  function concatDisplayNumbers(newNumber){
    let result;

    if(operation === null){
      result = concatNumbers(number1, newNumber);
      setNumber1(result);
    }
    else {
      result = concatNumbers(number2, newNumber);
      setNumber2(result);
      result = numbers + newNumber;
    }

    setNumbers(result);
  }

  function resetNumbers(){
    setNumbers('0');
    setNumber1('0');
    setNumber2(null);
    setOperation(null);
  }

  function txtOperation(newOperation){
      if(number1 === '0')
        return;

      if(number2 === null){
        setOperation(newOperation);
        setNumbers(concatNumbers(number1, newOperation));
      }
      else {
        const result = calcular(parseFloat(number1), parseFloat(number2), operation);
        setNumbers(result.toString() + newOperation);
        setNumber1(result.toString());
        setOperation(newOperation); 
        setNumber2(null);
        
      }
  }

  function calcTotal(){
    if(number2 === null){
      return;
    }

    const result = calcular(parseFloat(number1), parseFloat(number2), operation);
    setNumbers(result);
  }

  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#005fbb',
      padding: '5px',
      margin: '5px',
      width: '400px'

    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={ () => resetNumbers()}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control type="text" name="numbers" readOnly="readonly" className="text-right" value={numbers} data-testid="inputNumbers"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('7') }>7</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('8') }>8</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('9') }>9</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={ () => txtOperation(DIV)}>/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('4') }>4</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('5') }>5</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('6') }>6</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={ () => txtOperation(MULT)}>*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('1') }>1</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('2') }>2</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('3') }>3</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={ () => txtOperation(SUB)}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers(0) }>0</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={ () => concatDisplayNumbers('.') }>.</Button>
          </Col>
          <Col>
            <Button variant="success" onClick={calcTotal}>=</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={ () => txtOperation(SUM)}>+</Button>
          </Col>
        </Row>
      </Container>

    </Jumbotron>
  );
}

export default Calculator;

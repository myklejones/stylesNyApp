import React from 'react'
import {Form, Row, Col} from 'react-bootstrap'
import styled from 'styled-components'


const Styles = styled.div`
width: 90%;
max-width: 40rem;
margin: 2rem auto;
border: 1px solid #ccc;
padding: 1rem; 

`;


function Login (props)
{
    return(
    <Styles>
        <Form id="basic-form">
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="username@email.com" />
          </Col>
        </Form.Group>
      
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
      </Form>
    </Styles>
    )
};

export default Login 

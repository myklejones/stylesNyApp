import React from 'react'
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components'


const Styles = styled.div`
width: 90%;
max-width: 40rem;
margin: 2rem auto;
border: 1px solid #ccc;
padding: 1rem; 
background: white;

`;


function Login() {
    return (
        <Styles>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label=" " />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        </Styles>
    )
};

export default Login 

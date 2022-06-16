import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Leftside = () => {
    return (
        <div>
            <Form style={{ width: "30%", marginLeft: "10%", narginTop: "10%" }}>
                <br />
                <Form.Group>
                    <Form.Label> First Name</Form.Label>
                    <Form.Control placeholder='First Name' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder='Last Name' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Email' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Set Mobile Number</Form.Label>
                    <Form.Control placeholder='Mobile Number' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Set User Name</Form.Label>
                    <Form.Control placeholder='User Name' />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Set Password</Form.Label>
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>

                <br />
                <Button type='submit'>Register</Button>
                <Button type='submit' style={{marginLeft:"25%"}}>Reset</Button>
            </Form>
        </div>
    )
}

export default Leftside

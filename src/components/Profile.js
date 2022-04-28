import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Profile() {
    return (
        <div className='mx-5 my-3'>
            <Form>
                {/* <Form.Group className="mb-3" controlId="formBasicNmae">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicphone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Phone number" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicarea">
                    <Form.Label>Area of your farm in hectare</Form.Label>
                    <Form.Control type="number" placeholder="Area in hectare" />
                </Form.Group>

                <Form.Label>State</Form.Label>
                <Form.Select className="mb-3" aria-label="Default select example">
                    <option>Select your State</option>
                    <option value="1">Jharkhand</option>
                    <option value="2">Bihar</option>
                    <option value="3">Odisha</option>
                    <option value="3">Punjab</option>
                    <option value="3">Haryana</option>
                    <option value="3">Assam</option>
                </Form.Select>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Profile
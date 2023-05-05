import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'bootstrap/dist/css/bootstrap.min.css';

const BoxStyle = {
  backgroundColor: 'purple', 
  maxWidth: '200px', 
  height: '200px'
}

const BoxGenerator = () => {
  return (
    <div>
      <Container>
        <Form className='d-flex justify-content-center my-5'>
          <Form.Group>
            <Col className='d-flex justify-content-center m-2'>
              <Form.Label>
                Color
              </Form.Label>
              <Form.Control className='mx-3'/>
              <Button variant='secondary' >Add</Button>
            </Col>
          </Form.Group>
        </Form>
        <Row className='d-flex justify-content-center'>
          <Col 
          style={BoxStyle} >
          </Col>
          <Col 
          className='mx-5'
          style={BoxStyle} >
          </Col>
          <Col 
          style={BoxStyle} >
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BoxGenerator;
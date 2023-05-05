import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const DisplayForm = (props) => {
  // state vars for creating a box
  const [backgroundColor, setBackgroundColor] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  
  const boxSubmit = (e) => {
    e.preventDefault();
    
    // create the "box" obj here
    const newBox = {
      backgroundColor,
      width,
      height
    };
    
    setBackgroundColor("");
    setWidth("");
    setHeight("");
    
    // execute function from props
    props.updateBoxes(newBox);
  }

  return (
    <div>
      <Container>
        <Form className='d-flex justify-content-center my-5' onSubmit={boxSubmit} >
          <Form.Group>
            <Col className='d-flex justify-content-center m-2'>
              <Form.Label>
                Color
              </Form.Label>
              <Form.Control 
              className='mx-3'
              onChange={(e) => setBackgroundColor(e.target.value)} value={backgroundColor} 
              type='text'
              />
              <Form.Label>
                Width
              </Form.Label>
              <Form.Control 
              className='mx-3'
              onChange={(e) => setWidth(e.target.value)} value={width} 
              type='text'
              placeholder='i.e. 200px'
              />
              <Form.Label>
                Height
              </Form.Label>
              <Form.Control 
              className='mx-3'
              onChange={(e) => setHeight(e.target.value)} value={height} 
              type='text'
              placeholder='i.e. 200px'
              />
              <Button variant='secondary'type='submit' >Add</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}

export default DisplayForm;
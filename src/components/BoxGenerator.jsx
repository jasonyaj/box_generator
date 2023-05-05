import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const BoxGenerator = (props) => {
  return (
    <div>
      <Container>
        <Row>
          {
            props.boxes.map((box, idx) => {
              return (
                <div 
                // md='auto'
                className='m-4' 
                key={idx} 
                style={{
                  background: box.backgroundColor,
                  width: box.width,
                  height: box.height
                  }}>
                </div>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default BoxGenerator;
import BoxGenerator from './components/BoxGenerator';
import DisplayForm from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  
  // array of dummy "box" objects
  const [boxes, setBoxes] = useState([
    {
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
    },
    {
        backgroundColor: 'blue',
        width: '200px',
        height: '200px'
    },
    {
        backgroundColor: 'purple',
        width: '200px',
        height: '200px'
    }
  ])

  // function only to update state here
  const updateBoxes = (newBoxObj) => {
    setBoxes([...boxes, newBoxObj]);
  }
  
  return (
    <div className="App">
      <DisplayForm updateBoxes = {updateBoxes}/>
      <BoxGenerator boxes = {boxes}/>
    </div>
  );
}

export default App;

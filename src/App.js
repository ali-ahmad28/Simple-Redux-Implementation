import './App.css';
import { useSelector,useDispatch} from 'react-redux';
import {incNumber} from './actions/index'
import {decNumber} from './actions/index'

function App() {
  const myState = useSelector(state=>state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>
      <div>
        <a title='Decrement' onClick={()=>dispatch(decNumber())}><span className='span'>-</span></a>
        <input name='quantity' type='text' value={myState}/>
        <a title='Increment' onClick={()=>dispatch(incNumber())}><span className='span'>+</span></a>
      </div>
    </div>
  );
}

export default App;


import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import {  increment } from './components/counter/counterSlice'
import { decrement,multiply } from './redux/counter/counterSlice'
function App() {
 
 const count =
  useSelector((state)=>state.counter.value)
  const dispatch =useDispatch()
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div>
<button  onClick={()=>dispatch(decrement())}>-</button>
Currently count is {count}
<button onClick={()=>dispatch(increment())}>+</button>

<button onClick={()=>dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App

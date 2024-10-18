import { useSelector,useDispatch } from "react-redux"

const Navbar = () => {
    const count =useSelector((state)=>state.counter.value)
  return (
    <div>
      Navbar is here count is {count}
    </div>
  )
}

export default Navbar

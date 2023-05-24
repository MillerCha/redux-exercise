import {useDispatch} from 'react-redux'


function CounterChangerComp() {

  const dispatch = useDispatch();


  const add = () =>
  {
    dispatch( {type : "INCREMENT", payload : 3} )
  }

  const sub = () =>
  {
    dispatch( {type : "DECREMENT" , payload : 2} )
  }

  return (
    <div >
      
      <h3>Counter Changer</h3>

      <input type="button" value="+" onClick={add} />
      <input type="button" value="-" onClick={sub} />


    </div>
  );
}

export default CounterChangerComp;
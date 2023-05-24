import {useSelector} from 'react-redux'


function CounterViewerComp() {

  const storeData =  useSelector(state => state)

  return (
    <div className="App">
      
      <h3>Counter Viewer</h3>

      {storeData.counter}


    </div>
  );
}

export default CounterViewerComp;
import CounterChangerComp from "./CounterChangerComp";
import CounterViewerComp from "./CounterViewerComp";


function CounterContainerComp() {
  return (
    <div className="App">
      
      <CounterChangerComp /><br/>
      <CounterViewerComp /><br/>

  
    </div>
  );
}

export default CounterContainerComp;
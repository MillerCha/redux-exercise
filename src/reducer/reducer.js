/*
action - a json with
- type (mandatory) - the type of the action
- payload(optional) - the data sent with the action

*/


function appReducer(state = { counter : 0 }, action  )
{
    debugger;
    
    switch(action.type)
    {
        case "INCREMENT":
            return { ...state,  counter : state.counter + action.payload}

        case "DECREMENT":
            return { ...state,  counter : state.counter - action.payload}

        default:
            return state;
    }
}


export default appReducer;
import { useReducer } from "react"
// Library that let you write code to directly mutate state
import {produce} from "immer"
import Button from "../components/Button"
import Panel from "../components/Panel"
function CounterPage({ initialCount }) {
    //Rules around Reducer function: 
    //1) Whatever you return will be your new state
    //2) If you return nothing, then your state will be undefined!
    //3) No async/await, no requests, no promises, no outside variables
    //4) Like almost everywhare else in react, don't directly modify the state object!
    // BAD: state.count = state.count +1
    //Good: {...state, count: state.count+1}
    const INCREMENT_COUNT = "increment-count"
    const SET_VALUE_TO_ADD = "change-value-to-add"
    const ON_SUMBIT_FORM = "on-submit-form"
    const DECREMENT_COUNT = "decrement-count"
    const reducer = (state, action) => {
        // Understanding action object
        //1) when we need to modify state, we will call dispatch and always pass in an action object
        //2) The action object will always have a tyoe property that is string. This helps tell the reducer what state update it needs to make
        //3) This is common community convention, not a hard requirement

        switch (action.type) {
            case INCREMENT_COUNT:
                // mutate state using IMMER
                state.counter = state.counter + 1
                return
            case SET_VALUE_TO_ADD:
                return {
                    ...state,
                    valueToAdd: action.payload
                }
            case ON_SUMBIT_FORM:
                // Usually makes more sense to stuff lof=gic into the reducer and keep the dispatches simple
                // Less duplicated code if you need to dispatch the same action in multiple places
                // Part of the goal of reducers is to have a very specific set of ways that state can be changed
                return {
                    ...state,
                    counter: state.counter + state.valueToAdd,
                    valueToAdd: 0
                }
            case DECREMENT_COUNT:
                return {
                    ...state,
                    counter: state.counter - 1
                }
            default:
                // throw new Error("unexpected action type: " + action.type)
                return state
        }
    }
    // const [counter, setCounter] = useState(initialCount)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer(produce(reducer), {
        counter: initialCount || 0,
        valueToAdd: 0
    })
    // useReducer - Alternative to useState
    // Changing this state makes component re-render
    // Usefull when you have several different closely-related pieces of state
    // Usefull when future state values depend on the  current state
    const incHandler = () => {
        // Usefil when future state values depend on the  current state
        //    setCounter(counter+1)
        dispatch({
            type: "increment-count",
        })
    }

    const decHandler = () => {
        // Usefull when future state values depend on the  current state
        // setCounter(counter-1)
        dispatch({
            type: "decrement-count",
        })
    }

    const onChangeHandler = (event) => {
        const value = parseInt(event.target.value) || 0
        dispatch({
            type: "change-value-to-add",
            payload: value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        // Usefull when you have several different closely-related pieces of state
        // setCounter(counter + valueToAdd)
        // setValueToAdd(0)
        dispatch({
            type: "on-submit-form",
        })
    }
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is : {state.counter}</h1>
            <div className="flex flex-row">
                <Button onClick={incHandler}>Increment</Button>
                <Button onClick={decHandler}>Decrement</Button>
            </div>
            <form onSubmit={onSubmitHandler}>
                <label>Add a lot!</label>
                <input value={state.valueToAdd || ""} onChange={onChangeHandler} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"></input>
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage
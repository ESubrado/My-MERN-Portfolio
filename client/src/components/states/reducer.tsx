import { useReducer } from "react";

interface actionTypes {
    type: string
}

interface stateTypes {
    money: number
}

const reducer = (state: stateTypes, action: actionTypes) => {
    if(action.type === "ride") return { money : state.money + 10};
    if(action.type === "fuel") return { money : state.money - 50};

    throw Error("Unknown Function");
}

const ReducerExecute = () => {
    const initialState = {money : 100};
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <h1>Wallet: {state.money}</h1>
            <div>
                <button className="btn btn-primary mx-1" onClick={()=> dispatch({type: "ride"})}>A new customer.</button>
                <button className="btn btn-secondary mx-1" onClick={()=> dispatch({type: "fuel"})}>Refill the tank!</button>
            </div>
        </div>
    )

}

export default ReducerExecute;
import { useState } from "react";


const GoalForm = (props : any) => {
    const [formData, setFormData] = useState({goal: "", by: ""});

    function changeHandler(e : any){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function submitHandler(e: any){
        e.preventDefault();
        props.onAdd(formData);
        setFormData({goal: "", by: ""});      
    }

    return (
        <>
            <h1>My goals</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler} />
                <button>Submit Goal</button>
            </form>           
        </>
    )
}

const ListOfGoals = (props: any) => {
    return (
        <>
           <ul>
                { 
                    props.allGoals.map((g : any) => {
                        return (
                            <li key={g.goal}>
                                <span> My goal is to {g.goal}, by {g.by}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
     
    )
}


const SampleUseState = () => {
    const [allGoals, updateAllGoals] = useState([]);

    function addGoal(goal: never) {
        updateAllGoals([...allGoals, goal]);
    }

    return (
        <>
           <div className="App">
                <GoalForm onAdd={addGoal} />
                <ListOfGoals allGoals={allGoals}/>
           </div>         
        </>
    )


}

export default SampleUseState;
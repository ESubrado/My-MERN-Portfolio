import { useMealsListContext } from "./mealprovider";

const Counter = () => {

    const meals = useMealsListContext();

    return (
        <div>
            <h5>Number of meals today: {meals.length}</h5>
        </div>
    )
}

export default Counter

import { useMealsListContext } from "./mealprovider";

const MealList = () => {

    const meals = useMealsListContext();

    return (
        <div>
            <h2>Meal's List</h2>
            { meals.map((meal, index) => (
                <h3 key={index}>{meal.name}</h3>
            ))}
        </div>
    )

}

export default MealList
import React, { createContext, useContext, useState } from 'react'

//  interface mealType {
//      id?: number,
//      name?: string
// }

const MealsContext = createContext([{id:0, name: ''}]);
let TodaysMeals = [
    {id: 1, name: "Baked Beans"}, 
    {id: 2, name: "Fried chicken"}, 
    {id: 3, name: "Beef steak"}, 
    {id: 4, name: "Stewed Mushrooms"}
];

const MealsProvider = ({children} : any) => {

    const [meals, setMealsList] = useState(TodaysMeals);     
    //setMealsList(TodaysMeals)

    return (
        <>
            <MealsContext.Provider value={meals} >
                {children}
            </MealsContext.Provider>
        </>       
    )


}

export const useMealsListContext = () => useContext(MealsContext);

export default MealsProvider
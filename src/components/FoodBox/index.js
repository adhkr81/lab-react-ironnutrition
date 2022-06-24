import style from "./style.module.css"
import { Button } from "antd"


export function FoodBox ( {object} ) {

    return (

        
            <div className={style.container}>
                <h2>{object.name}</h2>
                <img src={object.image} />
                <p>Servings: {object.servings}</p>
                <p>Calories: {object.calories}</p>
                <Button type="primary">Delete</Button>
            </div>

    )
}


// {
//   "name": "Pizza",
//   "calories": 400,
//   "image": "https://i.imgur.com/eTmWoAN.png",
//   "servings": 1
// }
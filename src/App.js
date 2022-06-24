import './App.css';
import foods from './foods.json';
import {useState} from "react"

import {FoodBox} from "./components/FoodBox"
import {AddFoodForm} from "./components/AddFoodForm"
import {Search} from "./components/Search"


function App() {

  const [ allFoods, setAllFood ] = useState(foods)


  return (
    <div className="App">

    {/* <div>
    {allFoods.map((currentElement) => {

      return(
        <div key={currentElement.name}>
        <p>{currentElement.name}</p>
        <img src={currentElement.image} width={200} />
        </div>
      )
    })}
    </div> */}

    <div className="flexcontainer">
        {allFoods.map((currentElement) => {

          return(<FoodBox object={currentElement} key={currentElement.name}/>)
    })}
    </div>


    <AddFoodForm allFoods={allFoods} setAllFood={setAllFood}/>


    <Search allFoods={allFoods} setAllfood={setAllFood}/>




  

    </div>
  );
}

export default App;


// {
//   "name": "Pizza",
//   "calories": 400,
//   "image": "https://i.imgur.com/eTmWoAN.png",
//   "servings": 1
// }
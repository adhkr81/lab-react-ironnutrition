import {useState} from "react"
import { Input } from "antd"
import { Button } from "antd"


export function AddFoodForm ({allFoods, setAllFood}) {

    const [form, setForm] = useState( 
        {
            name: "",
            image: "",
            calories: "",
            servings: ""
        }
    )

    function handleChange(event) {
        console.log(event.target.value)
        setForm( {...form, [event.target.name] : event.target.value} )
    }


    function handleSubmit(event) {
        event.preventDefault()
        setAllFood([...allFoods, form])
    }



    return (
        <form>
            <label for="name">"Name: "</label>
            <Input name="name" onChange={handleChange}/>

            <label for="image">"Image: "</label>
            <Input name="image" onChange={handleChange}/>

            <label for="calories">"Calories: "</label>
            <Input name="calories" onChange={handleChange}/>

            <label for="servings">"Servings: "</label>
            <Input name="servings" onChange={handleChange}/>

            <Button onClick={handleSubmit}>CREATE</Button>

        
        
        </form>


    )
}
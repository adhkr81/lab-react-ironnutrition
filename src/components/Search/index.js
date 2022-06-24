import { useState } from "react"
import { Input } from "antd"


export function Search ({allFoods, setAllFood}) {

    const [form, setForm] = useState (
        {
            search: ""
        }
    )

    function handleChange (event) {
        console.log(event.target.value)   

        setForm({...form, [event.target.name] : event.target.value})

        setAllFood(allFoods.name.filter((event) =>
            {
                return event.target.value
            }))
    }




    return (
        <form>
            <label>Search</label>
            <Input name="search" onChange={handleChange} />

        </form>
    )

}
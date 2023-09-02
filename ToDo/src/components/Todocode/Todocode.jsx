import { useState } from "react"
import style from "./Todocode.module.scss"
import { AiFillCloseCircle } from "react-icons/ai"



export const Todocode = () => {

    const [todoArray, SetTodoArray] = useState(["første", "andet"])
    
    const addToArray = () => {
        let clone = [...todoArray];
        clone.push('new item');
        SetTodoArray(clone);

        console.log('todoarray', todoArray);
    }

    return (
        <section className={style.todocode}>
            {todoArray && todoArray.map((item, index) => <p key={index}>{item}</p>)}

            <button onClick={addToArray}><AiFillCloseCircle /></button>

        </section>


    )
}
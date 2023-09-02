import React, { useState } from 'react';
import style from "./Todo.module.scss"


    // Todo app - OPGAVE

    // Oprette nye TODO's med en knap
    // Man skal kunne slette TODO's enkeltvis
    // Man skal kunne slette alle todos på en gang

    // BOUNS
    // Gøre sådan man kan flytte TODO's melleem de forskellige sektioner.


export function Todo() {

    const [newArray, setNewArray] = useState([])
    const [newItem, setNewItem] = useState('')

    // tilføjer
    const addNewItem = () => {
        if (newItem.trim() !== '') {
        setNewArray([...newArray, newItem])
        setNewItem('')
    }}

    // sletter en enkelt
    const deleteItem = (index) => {
    const updateArray = newArray.filter((_, i) => i !== index)
    setNewArray(updateArray)
    };

    // sletter alle
    const deleteAllItem = () => {
    setNewArray([])
    }

    return (
        <section className={style.todo}>
            <header>
                <h1>To Do</h1>
            </header>
            <div>
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Add a item"
                />
                <button onClick={addNewItem}>Add</button>
            </div>
            <ul>
                {newArray.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button onClick={() => deleteItem(index)}>Delete</button>
                        </li>
                    )
                })}
                {/* {newArray.length > 0 && ()} */}
                    <button onClick={deleteAllItem}>Delete All</button>
             </ul>
        </section>
    )
}
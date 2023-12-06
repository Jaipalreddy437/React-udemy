import React from 'react'
import Review from './Review'
import './ExerciseOne.css'
import { useState } from 'react'

const Exercise1 = () => {
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const nameHandler = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea value={description} onChange={descriptionHandler} />
                </p>
                <p>
                    <label>Your Name</label>
                    <input type="text" value={name} onChange={nameHandler} />
                </p>
            </section>
            <section id="draft">
                <h2>Your feedback</h2>

                <Review feedback={description} student={name} />

                <p>
                    <button>Save</button>
                </p>
            </section>
        </>
    )
}

export default Exercise1
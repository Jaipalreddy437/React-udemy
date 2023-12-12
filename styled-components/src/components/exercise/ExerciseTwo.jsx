import React from 'react'
import './ExerciseTwo.css'

const ExerciseTwo = () => {
    const [choice, setChoice] = React.useState(null);
    let choiceName;
    if (choice === "yes") {
        choiceName = "highlight-green";
    } else if (choice === "no") {
        choiceName = "highlight-red";
    }
    return (
        <div id="app">
            <h1 className={choiceName}>CSS is great!</h1>
            <menu>
                <li>
                    <button onClick={() => setChoice("yes")}>Yes</button>
                </li>
                <li>
                    <button onClick={() => setChoice("no")}>No</button>
                </li>
            </menu>
        </div>
    )
}

export default ExerciseTwo
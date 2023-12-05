import React from 'react'
import './PracticeData.css'

const PracticeData = (props) => {
    return (
        <>
            {/* <ul id="concepts"> */}
                <li className="concept">
                    <img src={props.image} />
                    <h2> {props.title}</h2>
                    <p> {props.description}</p>
                </li>
            {/* </ul> */}
        </>
    )
}

export default PracticeData

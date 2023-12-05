import React from 'react'
import ExpenceItem from './ExpenceItem';
import './ExpensesList.css'

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h3 className='expenses-list__fallback'>No Expenses Found.</h3>
    }

    return (
        <div className='expenses-list'>
            <ul>
                {props.items.map(expense =>
                    <ExpenceItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )}
            </ul>
        </div>
    )
}

export default ExpensesList

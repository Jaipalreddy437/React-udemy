
import { useState } from 'react'
import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm'
const NewExpense = (props) => {

    const [expenseNew, setExpenseNew] = useState(false);

    const onSaveHandler = (eneterdExpenseData) => {
        const expenseData = {
            ...eneterdExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        props.onAddExpense(expenseData);
        setExpenseNew(false)
    }

    const stopExpense = () => {
        setExpenseNew(false)
    }
    return (
        <div className='new-expense'>
            {!expenseNew &&
                <button type='submit' onClick={() => setExpenseNew(true)}>Add New Expense</button>
            }
            {expenseNew &&
                <NewExpenseForm onSaveExpenseData={onSaveHandler} onCancel={stopExpense} />
            }
        </div>
    )
}

export default NewExpense

import './Expenses.css'
import ExpenceItem from './ExpenceItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2023")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredData = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={filteredData} />
            <ExpensesList items={filteredData} />
            {/* <ExpenceItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpenceItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
            <ExpenceItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} /> */}
        </Card>
    )
}

export default Expenses

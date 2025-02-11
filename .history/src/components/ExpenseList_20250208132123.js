import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {

  render() {
    return (
      console.log(this.props.initialExpenses);
      <>
        <ul className='list'>
            {/* Expense Item */}
            <ExpenseItem />
        </ul>
        <button className='btn'>
            목록 지우기 
            <MdDelete className='btn-icon'/>
        </button>
      </>
    )
  }
}

export default ExpenseList
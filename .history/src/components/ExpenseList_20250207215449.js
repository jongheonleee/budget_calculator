import React, { Component } from 'react'
import './ExpenseList.css'

export class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className='list'>
            {/* Expense Item */}
        </ul>
        <button className='btn'>
            목록 지우기 
        </button>
      </>
    )
  }
}

export default ExpenseList
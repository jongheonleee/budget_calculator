import React, { Component } from 'react'
import './ExpenseItem.css'

export class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>학원등록</span>
          <span className='amount'> 1,000원 </span>
        </div>

        <div>
          <button className='edit-btn'>수정</button>
          <button classBame='clear-btn'>삭제</button>
        </div>
      </li>
    )
  }
}

export default ExpenseItem
import React, { Component } from 'react'
import './ExpenseItem.css';
import { MdEdit } from'react-icons/md';

export class ExpenseItem extends Component {
  render() {
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>학원등록</span>
          <span className='amount'> 1,000원 </span>
        </div>

        <div>
          <button className='edit-btn'><MdEdit/></button>
          <button className='clear-btn'>삭제</button>
        </div>
      </li>
    )
  }
}

export default ExpenseItem
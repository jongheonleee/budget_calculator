import React, { Component } from 'react'
import './ExpenseItem.css';
import { MdEdit, MdDelete } from'react-icons/md';

const ExpenseItem = ({ expense }) => {
    return (
      <li className='item'>
        <div className='info'>
          <span className='expense'>{this.props.expense.charge}</span>
          <span className='amount'> {this.props.expense.amount} 원 </span>
        </div>

        <div>
          <button className='edit-btn'><MdEdit/></button>
          <button 
            className='clear-btn'
            onClick={() =>
              this.props.handleDelete(this.props.expense.id)
            }
          >
            <MdDelete />
          </button>
        </div>
      </li>
    )
}

export default ExpenseItem
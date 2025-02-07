import React, { Component } from 'react'

export class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <div>
            <div className='form-center'>
                <div className='form-group'>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='charge'
                        name='charge' 
                        placeholder='예) 렌트비'
                    />
                </div>
                <div className='form-group'></div>
            </div>
        </div>

        <button tpye='submit' className='btn'>
            제출 
        </button>
      </form>
    )
  }
}

export default ExpenseForm
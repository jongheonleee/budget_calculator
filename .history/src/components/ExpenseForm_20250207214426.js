import React, { Component } from 'react'

export class ExpenseForm extends Component {
  render() {
    return (
      <form>
        <div>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='charge'> 지출 항목 </label>
                    <input 
                        type='text' 
                        className='form-control' 
                        id='charge'
                        name='charge' 
                        placeholder='예) 렌트비'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='charge'> 비용 </label>
                    <input 
                        type='number' 
                        className='form-control' 
                        id='charge'
                        name='charge' 
                        placeholder='예) 렌트비'
                    />

                </div>
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
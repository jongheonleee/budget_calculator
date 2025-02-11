import { Component } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id : 1, charge : '렌트비', amount : 1600},
        { id : 2, charge : '교통비', amount : 3500},
        { id : 3, charge : '식비', amount : 4500}
      ]
    }
  }

  handleDelete = (id) => {
    const newExpenses = this.initialExpenses.filter(expense => expense.id !== id);
    console.log(newExpenses)
  }

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        {/* 작성 영역 */}
        <div style={{ width:'100%', backgroundColor : 'white', padding: '1rem'}}>
          <ExpenseForm />
        </div>

        {/* 리스트 영역 */}
        <div style={{ width:'100%', backgroundColor : 'white', padding: '1rem'}}>
          <ExpenseList 
            initialExpenses={this.initialExpenses} 
            handleDelete={this.handleDelete}
          />
        </div>

        <div style={{ display : 'flex', justifyContent: 'end', marginTop: '1rem'}}>
          <p style={{ fontSize : '2rem'}}>
            총지출율 : 
            <span>원</span>
          </p>
        </div>
      </main>
    )
  }
}

export default App;
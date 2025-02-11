import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([
    { 
      id : 1,
      charge : '렌트비', 
      amount : 1600
    },
    { 
      id : 2, 
      charge : '교통비', 
      amount : 3500
    },
    { id : 3, 
      charge : '식비', 
      amount : 4500
    }
  ])

  const handleCharge = (e) =>  {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
  }

  const handleAmount = (e) => {
    console.log(e.target.valueAsNumber);
    setAmount(e.target.valueAsNumber);
  }


  const handleSubmit = (e) => {
    // 1차적으로 화면 리프레쉬 막기
    e.preventDefault();

    // 입력값 유효성 검증 
    if (charge !== null && amount > 0) {
      // 새로운 항목 추가 
      const newExpense = { id : crypto.randomUUID(), charge, amount };
      // 새로운 expenses 생성 -> 불변성 지키기
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);

      // 필드 초기화 
      setCharge("");
      setAmount(0);
    } else {
      alert('제대로 된 값을 입력해라인마')
    }
  }

    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        {/* 작성 영역 */}
        <div style={{ width:'100%', backgroundColor : 'white', padding: '1rem'}}>
          <ExpenseForm 
            handleCharge={handleCharge}
            charge={charge}
            handleAmount={handleAmount}
            amount={amount}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* 리스트 영역 */}
        <div style={{ width:'100%', backgroundColor : 'white', padding: '1rem'}}>
          <ExpenseList 
            initialExpenses={expenses} 
            handleDelete={handleDelete}
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

export default App;
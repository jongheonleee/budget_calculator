import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {

  // 해당 컴포넌트에서 관리하는 데이터
  // - getter, setter 정의 
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState([{ id : 1, charge : '렌트비', amount : 1600},
                                            { id : 2, charge : '교통비', amount : 3500},
                                            { id : 3, charge : '식비', amount : 4500}])

  const [alert, setAlert] = useState({ show : false });


  // 지출명 핸들링 
  const handleCharge = (e) =>  {
    console.log(e.target.value);
    setCharge(e.target.value);
  }

  // 항목 삭제 처리 
  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
  }

  // alert 처리
  const handleAlert = ({ type, text }) => {
    // alert 필드 변경 
    setAlert({ show : true, type, text });
    // 7초후 alert 창 닫기 
    setTimeout(() => {
      setAlert({ show : false });
    }, 7000);
  }

  // 비용 핸들링 
  const handleAmount = (e) => {
    console.log(e.target.valueAsNumber);
    setAmount(e.target.valueAsNumber);
  }

  // submit 핸들링 
  const handleSubmit = (e) => {
    // 1차적으로 화면 리프레쉬 막기
    e.preventDefault();

    if (!isValidInput(charge, amount)) {
      handleAlert({ type: 'danger', text: 'charge는 빈 값일 수 없으며 amount는 0보다 커야합니다.'});
      return;
    }

    // 새로운 항목 추가 
    const newExpense = { id : crypto.randomUUID(), charge, amount };
    // 새로운 expenses 생성 -> 불변성 지키기
    const newExpenses = [...expenses, newExpense];
    setExpenses(newExpenses);

    // 필드 초기화 
    setCharge("");
    setAmount(0);

    // 성공 alert 띄우기 
    handleAlert({ type: 'success', text: '아이템이 생성되었습니다.' });
  }

  // 입력값 유효성 검증 -> handleSubmit에서 활용 
  const isValidInput = (charge, amount) => {
    return charge !== null && amount > 0
  }

    return (
      <main className="main-container">
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1>예산 계산기</h1>

        {/* 작성 영역 */}
        <div style={{ width:'100%', backgroundColor : 'white', padding: '1rem'}}>
          <ExpenseForm  // 자식 컴포넌트에선 전달 받은 데이터를 직접적으로 변경할 수 없음. 따라서, 부모 컴포넌트에서 해당 데이터를 변경할 수 있는 함수를 전달해야함 
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
import { Component } from "react";
import "./App.css";


class App extends Component {

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div style={{ width:'100%', backgroundColor : 'white', padding: '1rem'}}>
          { /* Expense List */ }
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
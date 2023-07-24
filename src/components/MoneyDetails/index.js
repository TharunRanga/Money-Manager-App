// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="container balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="icon"
          alt="balance"
        />
        <div>
          <p className="transaction-type">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>
      <div className="container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="icon"
          alt="income"
        />
        <div>
          <p className="transaction-type">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>
      <div className="container expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="icon"
          alt="expenses"
        />
        <div>
          <p className="transaction-type">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

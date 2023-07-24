// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-item">
      <p className="text">{title}</p>
      <p className="text">{amount}</p>
      <p className="text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          data-testid="delete"
          type="button"
          onClick={onDeleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem

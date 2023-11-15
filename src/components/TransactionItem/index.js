// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails, isDeleteHistory} = props
  const {id, title, amount, type} = historyDetails

  const onClickDelete = () => {
    isDeleteHistory(id)
  }

  return (
    <li className="history-list-item">
      <p className="subtitle">{title}</p>
      <p className="subtitle">Rs {amount}</p>
      <p className="subtitle">{type}</p>
      <div className="delete-container">
        <button
          type="button"
          onClick={onClickDelete}
          data-testid="delete"
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem

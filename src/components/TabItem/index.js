import './index.css'

const TabItem = props => {
  const {tabDetails, clickItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickItem = () => {
    clickItem(tabId)
  }
  const tabClassName = isActive && 'active-tab-btn'

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${tabClassName}`}
        onClick={onClickItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

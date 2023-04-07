import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearch} = props
  const {suggestion} = suggestionItem

  const updateSuggestion = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="list">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={updateSuggestion}
      />
    </li>
  )
}
export default SuggestionItem

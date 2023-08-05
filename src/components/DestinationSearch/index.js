// Write your code here
import './index.css'
import DestinationItem from '../DestinationItem/index'

const DestinationSearch = props => {
  const {destinationsList} = props

  let searchInput = ''

  const onSearchChange = event => {
    searchInput = event.targe.value
  }
  const searchResult = destinationsList.filter(eachDest =>
    eachDest.name.includes(searchInput),
  )

  return (
    <div className="mainContainer">
      <h1>Destination Search</h1>
      <div className="searchContainer">
        <input
          onChange={onSearchChange}
          className="inputStyle"
          type="search"
          placeholder="Search"
        />
        <img
          className="searchIcon"
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
      </div>
      <ul className="destinationItemsContainer">
        {searchResult.map(eachItem => (
          <DestinationItem eachItem={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch

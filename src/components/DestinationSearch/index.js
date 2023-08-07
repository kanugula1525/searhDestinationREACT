// Write your code here
import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => this.setState({searchInput: event.target.value})

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const filteredDestinations = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="mainContainer">
        <h1>Destination Search</h1>
        <div className="searchContainer">
          <input
            className="inputStyle"
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearch}
            value={searchInput}
          />
          <img
            className="searchIcon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destinationItemsContainer">
          {filteredDestinations.map(eachItem => (
            <DestinationItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

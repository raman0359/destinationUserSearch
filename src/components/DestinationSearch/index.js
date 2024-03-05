import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

export default class DestinationSearch extends Component {
  constructor(props) {
    super(props)

    const {destinationsList} = this.props

    this.state = {
      searchString: '',
      destinationItemList: destinationsList,
    }
  }

  userSearchInputChangeHandler = userSearchInputChangeEvent => {
    const {destinationsList} = this.props
    const userSearchInput = userSearchInputChangeEvent.target.value
    const filteredDestinationItemsData = destinationsList.filter(
      currentDestinationItem => {
        const lowerCaseName = currentDestinationItem.name.toLowerCase()
        const lowerCaseUserSearchInput = userSearchInput.toLowerCase()
        return lowerCaseName.includes(lowerCaseUserSearchInput)
      },
    )

    this.setState({
      searchString: userSearchInput,
      destinationItemList: filteredDestinationItemsData,
    })
  }

  render() {
    const {searchString, destinationItemList} = this.state

    return (
      <div className="destination-search-bg-container">
        <h1 className="destination-search-header">Destination Search</h1>
        <div className="search-bar">
          <input
            className="search-input"
            placeholder="Search"
            type="search"
            name="search-input"
            value={searchString}
            onChange={this.userSearchInputChangeHandler}
          />
          <img
            className="search-icon-img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="destination-items-container">
          {destinationItemList.map(currentDestinationItem => (
            <DestinationItem
              key={currentDestinationItem.id}
              destinationItemData={currentDestinationItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

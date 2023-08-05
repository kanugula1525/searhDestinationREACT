// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachItem} = props
  const {name, imgUrl} = eachItem
  return (
    <li className="destinationContainer">
      <img className="imageStyle" src={imgUrl} alt={name} />
      <p className="destinationName">{name}</p>
    </li>
  )
}

export default DestinationItem

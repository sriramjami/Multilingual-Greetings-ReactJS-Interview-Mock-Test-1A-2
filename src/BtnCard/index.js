import './index.css'

const BtnCard = props => {
  const {eachDetails, onClickingBtnElement, isActive} = props
  const {id, buttonText, imageUrl, imageAltText} = eachDetails
  const activeCls = isActive ? 'activeCls' : ''

  const onClickBtn = () => {
    onClickingBtnElement(imageUrl, id, imageAltText)
  }
  return (
    <li key={id} className="item">
      <button
        type="button"
        onClick={onClickBtn}
        className={`button ${activeCls}`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default BtnCard

import { useState } from 'react'
import RingLoader from 'react-spinners/RingLoader'

export default props => {
  const { song } = props
  const [showSpinner, setShowSpinner] = useState(true)
  const [showHide, setShowHide] = useState('hidden')
  const hideSpinner = () => {
    setShowSpinner(false)
    setShowHide('show')
  }
  return (
    <>
      <RingLoader color='red' size='300px' loading={showSpinner} />
      <iframe src={song} width='300' height='380' frameBorder='0' className={showHide} allowtransparency='true' allow='encrypted-media' onLoad={hideSpinner} />
      <style jsx>
        {`
          .hidden {
            display: none;
          }
          .show {
            display: block;
          }
        `}
      </style>
    </>
  )
}

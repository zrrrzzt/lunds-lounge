import { useState } from 'react'

export default props => {
  const { song, setShowSpinner } = props
  const [showHide, setShowHide] = useState('hidden')
  const hideSpinner = () => {
    setShowSpinner(false)
    setShowHide('show')
  }

  return (
    <>
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

export default props => {
  const { song } = props
  return (
    <iframe src={song} width='300' height='380' frameBorder='0' allowtransparency='true' allow='encrypted-media' />
  )
}

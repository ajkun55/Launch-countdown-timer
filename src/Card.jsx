import propTypes from 'prop-types'

 function Card(props) {
    const {value='', title=''} = props;
  return (
    <div className='card-container'>
      <div className="card">
        <p className='value'>{value}</p>
      </div>
      <p className='title'>{title}</p>
    </div>
  );
}
Card.propTypes = {
    value: propTypes.string,
    title: propTypes.string
}

export default  Card
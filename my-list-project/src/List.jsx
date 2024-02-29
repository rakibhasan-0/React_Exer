import PropTypes from 'prop-types';

function List(props) {
  const listItems = props.items.map((item) => (
    <li key={item.id}>{item.name} &nbsp; {item.price}</li>
  ));

  return (
    <>
      <h1>{props.category}</h1>
      <ul>{listItems}</ul>
    </>
  );
}


List.propTypes = {
  items: PropTypes.array.isRequired, 
  category: PropTypes.string,
};

List.defaultProps = {
  items: [], 
  category: "Fruits", 
};

export default List;

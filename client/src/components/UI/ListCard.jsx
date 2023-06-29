
import PropTypes from 'prop-types';
import Card from "./Card";


const ListCard = ({data, search, }) => {

 
   //metodo de filtrado 
   const results = !search
   ? data
   : data.filter((dato) =>
       dato.name.toLowerCase().includes(search.toLocaleLowerCase())
     );

  return (
    <>
      {results?.map((item, index) => (
        <Card item={item} key={index}  />
      ))}
    </>
  );
};
ListCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  search: PropTypes.string,
};
export default ListCard;

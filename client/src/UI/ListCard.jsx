/* eslint-disable react/prop-types */

import Card from "./Card";

const ListCard = ({data}) => {

  return (
    <>
      {data?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </>
  );
};

export default ListCard;

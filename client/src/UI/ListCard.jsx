/* eslint-disable react/prop-types */
// import { useContext } from "react";
// import { ZapateroContext } from "../context/ZapateroProvider";
import Card from "./Card";

const ListCard = ({data}) => {
  // const { ZapateroData } = useContext(ZapateroContext);
  // console.log(ZapateroData)
  return (
    <>
      {data?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </>
  );
};

export default ListCard;

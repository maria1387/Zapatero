import { useContext } from "react";
import { ZapateroContext } from "../context/ZapateroProvider";
import Card from "./Card";

const ListCard = () => {
  const { ZapateroData } = useContext(ZapateroContext);
  return (
    <>
      {ZapateroData?.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </>
  );
};

export default ListCard;

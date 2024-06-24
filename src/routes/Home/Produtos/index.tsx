import { Outlet } from "react-router-dom";
import "./styles.css"
import CardNav from "../../../components/Header/CardNav";

export default function Produtos() {
  return (
    <>
      <CardNav/>
      <Outlet/>
    </>
  );
}
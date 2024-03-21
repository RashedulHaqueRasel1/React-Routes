import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Home() {
  return (
    <div>

        <Header></Header>
        <h2 className="text-4xl text-red-500 text-center mt-10">This is a Home</h2>
        <Outlet></Outlet>
      
    </div>
  )
}

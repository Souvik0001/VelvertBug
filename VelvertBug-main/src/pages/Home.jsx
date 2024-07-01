import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import React, { useContext } from 'react'
import { StoreContext } from '../assets/Components/Context/StoreContext'
// import "./style.css";

export default function Home() {
    const {greeting_list,url} = useContext(StoreContext);
  return (
    <>
      <div className="card-display-list">
        {greeting_list.map((item) => {
            return (
                <div>
                    <div className="item">{item._id}</div>
                    <div className="image">
                        <img src={url+"/images/"+item.image} alt="" />
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="description">{item.font}</div>
                    <div className="price">{item.price}</div>

                </div>

            );
        })}
      </div>
    </>
  );
}

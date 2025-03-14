import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import SingleInfo from "./SingleInfo";
const Contactinfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="piyushprasad0521@gmail.com" Image={HiOutlineMail}/>
      <SingleInfo text="+91 8294570521" Image={FiPhone}/>
      <SingleInfo text="Ranchi, Jharkhand" Image={MdOutlineLocationOn}/>
    </div>
  );
};

export default Contactinfo;

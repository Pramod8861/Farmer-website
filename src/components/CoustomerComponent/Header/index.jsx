import React, { useEffect, useRef } from "react";
import { CloseSVG } from "../../../assets/image";
import { Img, Button, Input } from "../../Cindex";
import { signOut } from "firebase/auth";
import { auth } from "Server/FireBase/firebase";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  const nvigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      nvigate("/");
    }).catch((error) => {
      toast.error(error, {
        position: "top-right",
      });
    });
  }



  return (
    <header {...props}>
      <ToastContainer />
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1128px]">
        <div />
        <div className="flex flex-row justify-between items-center w-auto gap-5">
          <Button color="gray_50" size="lg" className="w-[35px] h-[35px] rounded-[17px]">
            <Img src="/Cimages/img_group_257.svg" />
          </Button>
          <Button color="gray_50" size="lg" className="w-[35px] h-[35px] rounded-[17px]">
            <Img src="/Cimages/img_group_259.svg" />
          </Button>
          <Img src={props.userdetails.photoURL} alt="circleimage" className="h-10 w-10 rounded-[50%]" />
          {/* <Button color="gray_50" size="lg" className=" h-20 w-[13vw] flex items-center justify-center font-medium overflow-hidden ml-2 text-gray-900 border border-black px-10 py-6">
            <Link to={`/${props.userdetails.uid}/addproduct`}>
              Register as a Farmer
            </Link>
          </Button> */}
        </div>
      </div>
    </header>
  );
}

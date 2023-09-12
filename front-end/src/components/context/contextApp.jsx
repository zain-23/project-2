"use client";
import axios from "axios";
import React, { createContext, useEffect, useRef, useState } from "react";
export const ContextData = createContext();

export const Context = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverId, setHoverId] = useState(null);
  const [product, setProducts] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  const [getCardData, setCardData] = useState([]);
  const [arry, setArry] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [blogId, setBlogId] = useState(null);
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const handleHoverStart = (id) => {
    setHoverId(id);
    setIsHovered(true);
  };

  // states
  const [isMobileSize, setIsMobileSize] = useState(false);
  //side effects
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobileSize(mediaQuery.matches);
    const handleMediaQueryChange = (e) => {
      setIsMobileSize(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const fetchSingleProduct = async (id) => {
    try {
      setUpdateId(id);
      const response = await axios.get(`/api/product/getbyid/${id}`); // Adjust the API endpoint
      setProducts(response?.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchSingleBlog = async (idBlog) => {
    try {
      setBlogId(idBlog);
      const response = await axios.get(`/api/blog/getbyid/${idBlog}`); // Adjust the API endpoint
      setSingleBlog(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCart = (data) => {
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const updatedArry = [...existingCartData, data];
    setArry(updatedArry);
    localStorage.setItem("cartData", JSON.stringify(updatedArry));
  };
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      setCardData(cartData);
    }
  }, [arry]);

  return (
    <>
      <ContextData.Provider
        value={{
          handleHoverStart,
          handleHoverEnd,
          isHovered,
          hoverId,
          sectionRef,
          isMobileSize,
          fetchSingleProduct,
          product,
          getCardData,
          handleCart,
          updateId,
          fetchSingleBlog,
          singleBlog,
          blogId,
          show,
          setShow,
        }}
      >
        {props.children}
      </ContextData.Provider>
    </>
  );
};

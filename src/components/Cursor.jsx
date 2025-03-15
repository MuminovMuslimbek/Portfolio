"use client";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const mouseMoveHandler = (e) => {
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;

import React from "react";

import Backdrop from "../Backdrop/Backdrop";
const show = () => {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", function (e) {
      <Backdrop show={true}>
        <img src={e.target.src} />
      </Backdrop>;
    });
  });
};
export default show;

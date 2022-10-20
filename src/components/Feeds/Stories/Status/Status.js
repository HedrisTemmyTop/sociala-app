import React from "react";
import classes from "../Stories.module.css";
import statusImg from "../../../../assets/story-1.jpg";
import statusImg2 from "../../../../assets/story-2.jpg";
import statusImg3 from "../../../../assets/story-3.jpg";

const status = () => {
  let currentSlide = 0;

  const images = document.querySelectorAll("[id=slide]");
  const goToSlide = (currentSlide) => {
    images.forEach((img, i) => {
      console.log(i);
      img.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  };
  const nextStatus = () => {
    if (currentSlide === images.length - 1) currentSlide = 0;
    else currentSlide++;
    console.log(currentSlide);
    goToSlide(currentSlide);
  };
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      nextStatus();
    }
  });
  const prevStatus = () => {
    if (currentSlide === 0) {
      currentSlide = images.length - 1;
    } else currentSlide--;

    goToSlide(currentSlide);
  };

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeftt") {
      prevStatus();
    }
  });

  return (
    <div className={classes.Status}>
      <div className={classes.Posts}>
        <div className={classes.Post} id="slide">
          <img src={statusImg} className={classes.Status__Post} />1
        </div>
        <div className={classes.Post} id="slide">
          <img src={statusImg2} className={classes.Status__Post} />2
        </div>
        <div className={classes.Post} id="slide">
          <img src={statusImg3} className={classes.Status__Post} />3
        </div>
      </div>
      <div className={classes.Btns}>
        <button
          onClick={() => {
            prevStatus(currentSlide);
          }}
          className={[classes.ArrowBtn, classes.BtnLeft].join(" ")}
        >
          <ion-icon name="chevron-back-outline">left</ion-icon>
        </button>

        <button
          onClick={() => {
            nextStatus(currentSlide);
          }}
          className={[classes.ArrowBtn, classes.BtnRight].join(" ")}
        >
          <ion-icon name="chevron-forward-outline">rightarrow</ion-icon>
        </button>
      </div>
    </div>
  );
};
export default status;

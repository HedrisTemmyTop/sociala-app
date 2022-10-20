import React, { useState } from "react";
import classes from "./Photos.module.css";
import photo from "../../../../assets/story-1.jpg";
import photo2 from "../../../../assets/story-2.jpg";
import photo3 from "../../../../assets/story-3.jpg";
import photo4 from "../../../../assets/s-1.jpg";
import { ref, storage, uploadBytes } from "../../../../Auth/AuthConfig";

const Photos = () => {
  // const [image, setImage] = useState();
  // const submitFile = (e) => {
  //   e.preventDefault();
  //   if (!image) return;

  //   const storageRef = ref(storage, `images/${image.name}`);
  //   uploadBytes(storageRef, image)
  //     .then((image) => {
  //       console.log(`profile image is ${image} `);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div>
      <div className={classes.Images}>
        <img src={photo} alt="photo" style={{ borderTopLeftRadius: "10px" }} />
        <img
          src={photo4}
          alt="photo"
          style={{ borderTopRightRadius: "10px" }}
        />
        <img
          src={photo3}
          alt="photo"
          style={{ borderBottomLeftRadius: "10px" }}
        />
        <img
          src={photo2}
          alt="photo"
          style={{ borderBottomRightRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default Photos;

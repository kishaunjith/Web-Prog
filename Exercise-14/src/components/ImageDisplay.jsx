import React from "react";
import PrivateImage from "../Images/private-image.jpg"; // Importing from src

export default function ImageDisplay() {
  return (
    <div>
      <h2>Image from Public Folder:</h2>
      <img src="/Images/public-image.jpg" alt="Public" width="300" />
      
      <h2>Image from Src Folder:</h2>
      <img src={PrivateImage} alt="Src" width="300" />
    </div>
  );
}

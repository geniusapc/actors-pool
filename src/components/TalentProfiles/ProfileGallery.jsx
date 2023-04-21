import React, { useRef, useState } from "react";

const ProfileGallery = () => {
  const [images, setImages] = useState([]);
  const inputRef = useRef(null);

  const handleImageInputClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (evt) {
      const base64 = evt.target.result;
      setImages((image) => [...image, { source: base64 }]);
    };
  };

  return (
    <div>
      <input
        className="hidden"
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />

      <div className="border-border100 border" />
      <div className="mt-10">
        <div className="grid md:grid-cols-4 gap-5  grid-cols-2 flex-col justify-center items-center">
          <div
            onClick={handleImageInputClick}
            className="border flex flex-col justify-center items-center mx-auto border-primary rounded-lg px-6 py-10 bg-gray200"
          >
            <img
              className="h-20 w-20 mb-4"
              src="icons/add-icon-large.svg"
              alt="add-icon-large"
            />
            <span className="font-semibold block text-sm text-primary mb-1.5">
              Add a picture of yourself
            </span>
          </div>
          {images.map((item) => (
            <div className=" rounded-lg" key={Math.random()}>
              <img className="" src={item.source} alt="add-icon-large" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileGallery;

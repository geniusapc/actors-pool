import React, { useRef, useState } from 'react';
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg';
import ActionButtons from './ActionButton';
import { gallerySchema } from '../../../validation/profile';
import { notifyError } from '../../../utils/notification';
import { nextStep, setFormData } from '../../../features/profile/profile';
import { useDispatch, useSelector } from 'react-redux';

const ProfileGallery = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch()
  const step = useSelector((state) => state.createProfile.step)
  const stages = useSelector((state) => state.createProfile.stages)
  const defaultPreviewImage = stages[step - 1].data?.previewUrl || []
  const defaultFile = stages[step - 1].data?.gallery || []

  const [previewUrl, setPreviewUrl] = useState(defaultPreviewImage);
  const [file, setFile] = useState(defaultFile);

  const handleImageInputClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files && event.target.files[0];
    setFile((prev) => [...prev, selectedFile]);

    if (!selectedFile) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedFile);
    fileReader.onload = function (evt) {
      const base64 = evt.target.result;
      setPreviewUrl((image) => [...image, base64]);
    };
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await gallerySchema.validate(previewUrl);
      dispatch(setFormData({ step: step, data: { gallery: file, previewUrl } }));
      dispatch(nextStep())
    } catch (error) {
      notifyError(error?.message);
    }
  };

  return (
    <div>
      <div className="border-border100 border" />
      <div className="mt-10">
        <div className="grid gap-5  grid-cols-2  md:grid-cols-4 flex-col justify-center items-center">
          <div
            onClick={handleImageInputClick}
            className="border flex flex-col justify-center items-center mx-auto border-primary rounded-lg px-6 py-10 cursor-pointer bg-gray200"
          >
            <AddIcon />
            <span className="font-semibold block text-sm text-primary mb-1.5">
              Add a picture of yourself
            </span>
          </div>
          {previewUrl.map((item) => (
            <div
              key={Math.random()}
              className=" h-[200px] w-full md:w-[200px]  gap-5 rounded-lg  bg-gray"
            >
              <img className="object-contain w-full h-full" src={item} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <input
          className="hidden"
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png"
        />
        <ActionButtons />
      </form>
    </div>
  );
};

export default ProfileGallery;

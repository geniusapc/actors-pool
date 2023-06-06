import React from "react";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const EmptyProfileCard = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl mb-4 font-bold">My Talent Profile</h3>
      <p className="mb-8 text-center md:w-2/6">
        You are yet to complete setting up your talent profile. You can pick up
        from where you left.
      </p>
      <img src="/images/empty_profile.svg" className="h-64" alt="empty_profile" />
      <Button className="mt-8 w-64" variant="primary" onClick={() => navigate('/profile/create')}>Proceed to Draft</Button>
    </div >
  );
};

export default EmptyProfileCard;

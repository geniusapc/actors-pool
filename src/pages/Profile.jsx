import React, { useState } from "react";
import Button from "../components/Button/Button";
import EmptyProfileCard from "../components/Cards/EmptyProfileCard";
import ProfileLayout from "../components/Layout/ProfileLayout";
import ProfileDescription from "../components/TalentProfiles/ProfileDescription";
import ProfileGallery from "../components/TalentProfiles/ProfileGallery";
import ProfileWorks from "../components/TalentProfiles/ProfileWorks";
import SocialAccount from "../components/TalentProfiles/SocialAccount";
import ProfileInformation from "../components/TalentProfiles/ProfileInformation";
import AuthHeader from "../components/Headers/AuthHeader";
import Layout from "../components/Layout/Layout";

const profileStepTitle = {
  1: {
    step: "1/5",
    title: "Personal Information",
    caption: "Set Up Your Talent Profile",
  },
  2: {
    step: "2/5",
    title: "About Me",
    caption: "Set Up Your Talent Profile",
  },
  3: {
    step: "3/5",
    title: "Works/Movies",
    caption: "Set Up Your Talent Profile",
  },
  4: {
    step: "4/5",
    title: "Gallery",
    caption: "Set Up Your Talent Profile",
  },
  5: {
    step: "5/5",
    title: "Social Accounts",
    caption: "Set Up Your Talent Profile",
  },
};

const profileStages = [
  {
    title: "Personal Information",
    isCompleted: false,
  },
  {
    title: "About Me",
    isCompleted: false,
  },
  {
    title: "Works/Movies",
    isCompleted: false,
  },
  {
    title: "Gallery",
    isCompleted: false,
  },
  {
    title: "Social Accounts",
    isCompleted: false,
  },
];

const Profile = () => {
  const [steps, setSteps] = useState(0);
  const [stages, setStages] = useState(profileStages);

  const handleNextStep = () => {
    if (steps === stages.length) return
    const updatedStages = stages.map((item) => ({
      ...item,
      isCompleted:
        item.title === profileStepTitle[steps + 1]?.title ? true : false,
    }));
    setStages(updatedStages);
    setSteps((step) => step + 1);
  };

  if (steps === 0) {
    return (
      <div>
        <Layout searchTalentHidden>
          <EmptyProfileCard onClick={handleNextStep} />
        </Layout>
      </div>
    );
  }

  const renderProfileStep = (steps) => {
    switch (steps) {
      case 1:
        return <ProfileInformation />;
      case 2:
        return <ProfileDescription />;
      case 3:
        return <ProfileWorks />;
      case 4:
        return <ProfileGallery />;
      case 5:
        return <SocialAccount />;
      default:
        break;
    }
  };

  return (
    <div className="my-10">
      <Layout searchTalentHidden sideBarHidden>
        <ProfileLayout
          data={stages}
          currentStep={steps}
          totalSteps={stages.length}
          caption={profileStepTitle[steps]?.caption}
          title={profileStepTitle[steps]?.title}
        >
          <div>
            {renderProfileStep(steps)}
            <div className="flex justify-between w-full md:justify-center items-end mt-14">
              <Button className="mr-4" variant="outlined">
                Save as draft
              </Button>
              <Button onClick={handleNextStep} variant="primary">
                Next
              </Button>
            </div>
          </div>
        </ProfileLayout>
      </Layout>





    </div>
  );
};

export default Profile;

import React from "react";
import SocialAccountCard from "../Cards/SocialAccountCard";

const socialMediaAccount = [
  {
    title: "Connect Instagram Account",
    icon: "/images/socials/Instagram.svg",
  },
  {
    title: "Connect Twitter Account",
    icon: "/images/socials/Twitter.svg",
  },
  {
    title: "Connect Facebook Account",
    icon: "/images/socials/Facebook.svg",
  },
  {
    title: "Connect Youtube Account",
    icon: "/images/socials/Youtube.svg",
  },
  {
    title: "Connect TikTok Account",
    icon: "/images/socials/Tik_Tok.svg",
  },
  {
    title: "Connect SnapChat Account",
    icon: "/images/socials/Snapchat.svg",
  },
];
const SocialAccount = () => {
  return (
    <div>
      <div className="border-border100 border" />
      <span className="mt-5 mb-8 block text-center text-gray text-sm">Connect at least two of these accounts to verify your identity</span>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {socialMediaAccount.map((item) => (
          <SocialAccountCard
            key={item.title}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialAccount;

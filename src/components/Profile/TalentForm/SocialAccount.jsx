import React from 'react';
import SocialAccountCard from '../Cards/SocialAccountCard';
import { ReactComponent as InstagIcon } from '../../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook.svg';
import { ReactComponent as TicktokIcon } from '../../../assets/icons/tik-tok.svg';
import { ReactComponent as SnapchatIcon } from '../../../assets/icons/snapchat.svg';
import ActionButtons from './ActionButton';
import { useDispatch } from 'react-redux';
import { nextStep } from '../../../features/profile/profile';

const socialMediaAccount = [
  {
    title: 'Connect Instagram Account',
    icon: InstagIcon,
  },
  {
    title: 'Connect Twitter Account',
    icon: TwitterIcon,
  },
  {
    title: 'Connect Facebook Account',
    icon: FacebookIcon,
  },
  {
    title: 'Connect TikTok Account',
    icon: TicktokIcon,
  },
  {
    title: 'Connect SnapChat Account',
    icon: SnapchatIcon,
  },
];

const SocialAccount = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    dispatch(nextStep());
  };

  return (
    <div>
      <div className="border-border100 border" />
      <span className="mt-5 mb-8 block text-center text-gray text-sm">
        Connect at least two of these accounts to verify your identity
      </span>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {socialMediaAccount.map((item) => (
          <SocialAccountCard key={item.title} title={item.title} Icon={item.icon} />
        ))}
      </div>

      <form onSubmit={onSubmitHandler}>
        <ActionButtons />
      </form>
    </div>
  );
};

export default SocialAccount;

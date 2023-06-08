import React from 'react';
import SocialAccountCard from '../Profile/Cards/SocialAccountCard';
import { ReactComponent as InstagIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as TicktokIcon } from '../../assets/icons/tik-tok.svg';
import { ReactComponent as SnapchatIcon } from '../../assets/icons/snapchat.svg';
import ActionButtons from './ActionButton';
import { useSelector } from 'react-redux';
import { useAddTalent } from '../../hooks/useTalentData';
import { notifyError, notifySuccess } from '../../utils/notification';
import { useNavigate } from 'react-router-dom';


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
  const navigate = useNavigate()
  const onSuccess = () => {
    notifySuccess("Profile created successfully")
    navigate("/profile")
  };
  const onError = (error) => {
    notifyError(error?.message)
  };
  const { mutate: addTalent } = useAddTalent(onError, onSuccess);

  const stages = useSelector((state) => state.createProfile.stages);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let payload = {};

    for (let i = 0; i < stages?.length; i++) {
      const data = stages[i]?.data || {};
      payload = { ...payload, ...data };
    }

    const formData = new FormData();
    formData.append('firstname', payload.firstname);
    formData.append('lastname', payload.lastname);
    formData.append('country', payload.country);
    formData.append('state', payload.state);
    formData.append('gender', payload.gender);
    formData.append('activeSince', payload.activeSince);
    formData.append('profession', payload.gender ? 'Actor' : 'Actress');
    payload.gallery.forEach((element) => {
      formData.append('gallery', element);
    });

    formData.append('about', payload?.about);

    payload.workList.forEach((element, index) => {
      formData.append(`movies[${index}][title]`, element?.title);
      if (element?.year)
        formData.append(`movies[${index}][year]`, element?.year);
    });

    addTalent(formData);
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

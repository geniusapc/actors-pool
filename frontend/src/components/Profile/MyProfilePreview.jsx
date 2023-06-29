import { TalentDetailsTab, TalentFullDetails } from '../TalentDetails';
import { PreviewProfileDetailsHeader } from './Headers';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const PreviewProfile = ({ onFormSuccess }) => {
  const [talent, setTalent] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const stages = useSelector((state) => state.createProfile.stages);

  useEffect(() => {
    let payload = {};
    for (let i = 0; i < stages?.length; i++) {
      const data = stages[i]?.data || {};
      payload = { ...payload, ...data };
    }
    payload.profession = payload.gender ? 'Actor' : 'Actress';

    const previewPayload = {
      firstname: payload?.firstname,
      lastname: payload?.lastname,
      profession: payload?.profession,
      activeSince: payload?.activeSince,
      country: payload?.country,
      state: payload?.state,
      phoneNumber: payload?.phoneNumber,
      socialMedia: payload?.socialMedia,
      about: payload?.about,
      photo: payload?.previewUrl?.[0],
      gallery: payload?.previewUrl?.map((photo) => ({ photo })),
      movies: payload?.workList,
    };
    setPreviewData(previewPayload);
    setTalent(payload);
  }, [stages]);

  return (
    <main >
      <PreviewProfileDetailsHeader talent={talent} onSubmitSucces={onFormSuccess} />
      <div className="flex flex-col justify-between md:flex-row w-full gap-8">
        <div className="w-full md:w-[308px] ">
          <TalentFullDetails talent={previewData} />
        </div>
        <div className="w-full  shadow-3xl">
          <TalentDetailsTab talent={previewData} />
        </div>
      </div>
    </main>
  );
};

export default PreviewProfile;

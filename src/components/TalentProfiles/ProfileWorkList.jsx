import ProfileWorkCard from "../Cards/ProfileWorkCard";

const workList = [
  {
    title: "Diamond Ring of Fire",
    year: "2009",
  },
  {
    title: "Diamond Ring of Fire",
    year: "2009",
  },
  {
    title: "Diamond Ring of Fire",
    year: "2009",
  },
  {
    title: "Diamond Ring of Fire",
    year: "2009",
  },
  {
    title: "Diamond Ring of Fire",
    year: "2009",
  },
  {
    title: "Diamond Ring of Fire",
    year: "2009",
  },
  {
    title: "Diamond Ring of Fire",
    year: "2009",
  },
];



const ProfileWorkList = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      {workList.map((item) => (
        <ProfileWorkCard title={item.title} year={item.year} />
      ))}
    </div>
  );
};

export default ProfileWorkList;
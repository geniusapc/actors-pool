import TalentCard from '../Talent/TalentCard';

const AllTalents = ({ data }) => {
    return (
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-3 gap-x-2">
            {data.map((talent) => (
                <TalentCard key={talent?._id} talent={talent} />
            ))}
        </div>
    );
};
export default AllTalents;

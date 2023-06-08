import TalentCard from '../Talent/TalentCard';

const AllTalents = ({ data }) => {
    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((talent) => (
                <TalentCard key={talent?._id} talent={talent} />
            ))}
        </div>
    );
};
export default AllTalents;

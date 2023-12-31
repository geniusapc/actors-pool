import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { openSignUpModal } from '../../features/auth/auth';

function SearchTalent() {
    const dispatch = useDispatch();
    return (
        <section className="w-full flex flex-col md:flex-row items-center  ">
            <div className="w-full md:w-1/2  md:order-2 text-white flex flex-col text-center md:text-left md:items-start">
                <h3 className="text-2xl md:text-5xl mb-6">Search for Talents</h3>
                <p className="text-base mb-12">
                    Are you looking for talents for your next project? You can come on here and cast
                    outstanding talents for your next big project. Connect with actors and start creating
                    magic.
                </p>
                <Button variant="primary"  className='mx-auto md:mx-0' onClick={() => dispatch(openSignUpModal())}>
                    Get Started
                </Button>
            </div>
            <div className="w-full md:w-1/2 md:order-1 h-[340px]">
                <img className="h-full" src="/images/frame_41.svg" alt="" />
            </div>
        </section>
    );
}

export default SearchTalent;

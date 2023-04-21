import Signin from '../components/Authentication/Signin';
import Signup from '../components/Authentication/Signup';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import GetStartedGuide from '../components/GetStartedGuide/GetStartedGuide';
import GuestHeader from '../components/Headers/GuestHeader';
import NewsletterSubscription from '../components/NewsletterSubscription/NewsletterSubscription';
import SearchTalent from '../components/SearchTalent/SearchTalent';
import TrailBlazers from '../components/TailBlazers/TailBlazers';
import Toptalents from '../components/Talent/TopTalents';


function Landing() {
  return (
    <main>
      <section className='bg-gradient-to-r  from-[#050504] to-[#0b1717]  md:pt-11 items-center text-[#ffff]'>
        <GuestHeader />

        {/* Landing */}
        <div className='flex flex-col items-center text-center gap-4 md:w-3/5 mx-auto px-4 pt-14 md:pt-20 pb-24'>
          <h1 class="text-2xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#6F55DA] to-[#55C2DA] py-1">
            <span className='text-[#ffff]'>The Largest Directory of</span>
            <span class='block'>African Entertainers</span>
          </h1>
          <p className='py-1 text-xs'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <div className='flex  gap-8 mt-8'>
            <Button>List Me as a Talent</Button>
            <Button variant='primary'>Search Talents</Button>
          </div>

        </div>
        <div className='flex flex-col items-center  w-4/5 h-[150px] md:h-[480px] mx-auto overflow-y-hidden'>
          <img src="images/landing-page-dir-img.svg" alt="landing page" />
        </div>
      </section>

      <Toptalents />
      <TrailBlazers />
      <GetStartedGuide />
      <section className='bg-gradient-to-r from-[#050504] to-[#0b1717] text-white '>
        <SearchTalent />
        <NewsletterSubscription />
        <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <Footer />
      </section>


      {/* Modal */}
      <Signin />
      <Signup />






    </main>
  );
}

export default Landing;

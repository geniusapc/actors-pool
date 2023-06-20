import Signin from '../../components/Authentication/Signin';
import Signup from '../../components/Authentication/Signup';
import Footer from '../../components/Footer/Footer';
import GetStartedGuide from '../../components/GetStartedGuide/GetStartedGuide';
import GuestHeader from '../../components/Headers/GuestHeader';
import NewsletterSubscription from '../../components/NewsletterSubscription/NewsletterSubscription';
import SearchTalent from '../../components/Talent/SearchTalent';
import TrailBlazers from '../../components/Landing/TrailBlazers';
import Toptalents from '../../components/Talent/TopTalents';
import SearchTalentSection from '../../components/Landing/SearchTalentSection';
import TnC from '../../components/Landing/TnC';

function Landing() {
  return (
    <main>
      <section className="bg-default-bg-img bg-cover w-full md:pt-11 items-center text-white">
        <div className="absolute h-full w-full bg-gradient-to-r from-[#050504] to-[#0b1717] -z-10 "></div>
        <GuestHeader />
        <SearchTalentSection />
        <div className="flex flex-col items-center  w-4/5 h-[150px] md:h-[480px] mx-auto overflow-y-hidden">
          <img src="images/landing-page-dir-img.svg" alt="landing page" />
        </div>
      </section>

      <Toptalents />
      <TrailBlazers />
      <GetStartedGuide />
      <section className="bg-default-bg-img bg-cover w-full h-full text-white  py-12 md:py-40">
        <div className="absolute h-full w-full bg-gradient-to-r from-[#050504] to-[#0b1717] -z-10 "></div>
        <div className='container mx-auto px-5 pb-40 space-y-16 flex flex-col items-center'>
          <SearchTalent />
          <NewsletterSubscription />

        </div>
        <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
        <Footer />
      </section>

      {/* Modal */}
      <Signin />
      <Signup />
      <TnC />
    </main>
  );
}

export default Landing;

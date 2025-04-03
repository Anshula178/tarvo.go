import DestinationSlider from "@/components/DestinationSlider";
import HeroSection from "@/components/HeroSection";
import ImageBanner from "@/components/ImageBanner";
import PopularActivities from "@/components/PopularActivities";
import SubscribeBanner from "@/components/SubscribeBanner";
import { Globe, Tag, Umbrella, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <div className='container m-auto max-w-7xl my-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-14'>
        {[
          {
            icon: <Globe size={55} className='text-gray-400 mx-auto fill-sky-600' />,
            title: 'Discover the possibilities',
            description: 'With nearly half a million attractions, hotels & more, you\'re sure to find joy.'
          },
          {
            icon: <Tag size={55} className='text-gray-400 mx-auto fill-sky-600' />,
            title: 'Enjoy deals & delights',
            description: 'Quality activities. Great prices. Plus, earn credits to save more.'
          },
          {
            icon: <Umbrella size={55} className='text-gray-400 mx-auto fill-sky-600' />,
            title: 'Exploring made easy',
            description: 'Book last minute, skip lines & get free cancellation for easier exploring.'
          },
          {
            icon: <ShieldCheck size={55} className='text-gray-400 mx-auto fill-sky-600 ' />,
            title: 'Travel you can trust',
            description: 'Read reviews & get reliable customer support. We\'re with you at every step.'
          },
        ].map((feature, index) => (
          <div key={index} className='text-center mx-auto'>
             {feature.icon}
            <h3 className='text-xl text-black font-semibold mt-4 '>{feature.title}</h3>
            <p className='text-gray-600 mt-4'>{feature.description}</p>
          </div>
        ))}
      </div>
      <DestinationSlider/>
      <PopularActivities/>
      <ImageBanner/>
      <SubscribeBanner/>
    </div>
  );
}

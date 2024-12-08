import CompanyLogo from './components/com-logo';
import FeaturedProducts from './components/f-products';
import Header from './components/header'
import HotCategory from './components/hot';
import OurProducts from './components/our-p';
import TopCategories from './components/top-c';


export default function Home() {
  return (
   <div  className='space-y-10'>
<Header className='px-10  md:px-32'/>
<CompanyLogo className='md:px-14 px-5 p-12'/>
<FeaturedProducts className='md:px-20 px-5 p-24'/>
<TopCategories className='md:px-24 px-5 p-24'/>
<HotCategory className='px-24 p-24'/>
<OurProducts className='pb-36'/>

   </div>
  );
}

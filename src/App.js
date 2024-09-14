import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Map from './components/Map'; 
import Header from './components/Header';
import Banner from './components/Banner';
import Featuredstats from './components/Featuredstats';
import WhyitMatters from './components/WhyitMatters';
import Ourmission from './components/Ourmission';
import Howwedo from './components/Howwedo';
import Footer from './components/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Banner />
            <Featuredstats />
            <WhyitMatters />
            <Ourmission />
            <Howwedo />
            <Footer />
    
          </>
        } />
        <Route path="/map" element={<Map />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-[72vh] overflow-hidden">
      <img
        src={process.env.PUBLIC_URL + '/space.jpg'}
        className="w-screen object-cover object-top inset-0 z-0 absolute"
        style={{
          transform: `translateY(${offset * 0.4}px)`,
        }}
      />
      <img
        src={process.env.PUBLIC_URL + '/satellite.webp'}
        className="w-[32vw] right z-9 absolute right-[10vw] bottom-0"
        style={{
          transform: `translateY(${offset * 0}px)`,
        }}
      />
    </div>
  );
};

export default Banner;
import React, { useEffect, useState } from 'react';

function Line() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-80 h-3 flex items-center">
      <div
        className={`absolute left-0 right-0 h-1 bg-white rounded-full transition-transform duration-1000 ease-out origin-left ${
          animate ? 'scale-x-100' : 'scale-x-0'
        } transform`}
      />

      <div className="w-5 h-5 bg-white rounded-full z-10" />
      <div className="flex-1" />
      <div className="w-5 h-5 bg-white rounded-full z-10" />
    </div>
  );
}

export default Line;

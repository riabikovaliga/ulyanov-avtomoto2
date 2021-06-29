import React from 'react';
import Slider from '../slider/slider';
import Description from '../description/description';
import Tabs from '../tabs/tabs';

const MainBody = () => {
  return (
    <main className="page-main">
      <div className="container">
        <div className="page-main__wrapper">
          <Slider />
          <Description />
          <Tabs />
        </div>
      </div>
    </main>
  );
};

export default MainBody;

import React from 'react';

import './style.scss';

const Loader = () => (
  <div className="container ui-app-container ui-footer-spacing">
    <div className="ui-loader">
      <svg
        id="loader-icon-top"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="222"
        height="178"
        viewBox="0 0 222 178"
      >
        <path
          style={{fill: '#18114a'}}
          d="M199.33,14.34A13.33,13.33,0,1,1,186,1,13.32,13.32,0,0,1,199.33,14.34Z"
        />
      </svg>
      <svg
        id="loader-icon-bottom"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        width="222"
        height="178"
        viewBox="0 0 222 178"
      >
        <path
          style={{fill: '#18114a'}}
          d="M197.35,138V47.49L152.24,54v5.67c19.57,0,23,4.82,23,33.2V138c0,12.94.92,
          28.05-10.08,29.67-13.54,2-28.5-4.64-28.8-37V50.94H91.51v5.67c18.72,0,22.7,4.82,22.7,33.2v34.61c0,
          22.13-21.28,38.59-38.87,38.59-17.87,0-29.51-10.78-29.51-35.18V50.94H1v5.67c18.72,0,22.7,4.82,22.7,
          33.2v38.3c0,30.07,15.32,48.8,44,48.8,19.58,0,38-13.34,46.81-26.39,7.7,24.68,22.45,26.39,50.89,
          26.39h55v-5.68C201.32,171.23,197.35,166.41,197.35,138Z"
        />
      </svg>
    </div>
  </div>
);

export default Loader;

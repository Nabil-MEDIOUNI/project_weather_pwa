import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ height, position }) => (
  <div className="spinner">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ background: 'none', position: 'absolute', marginTop: '3rem' }}
      height={height}
      center={position}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="50" cy="50" fill="none" stroke="#30c39e" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(90.203 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
      </circle>
    </svg>
  </div>
);

Loading.propTypes = {
  height: PropTypes.string,
  position: PropTypes.string,
};

Loading.defaultProps = {
  height: '20px',
  position: 'right',
};

export default Loading;

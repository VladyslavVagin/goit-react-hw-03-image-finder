import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#223691"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        justifyContant: 'center',
        display: 'flex',
        marginLeft: '42%',
    }}
      visible={true}
    />
  );
};

export default Loader;

/* eslint-disable react/prop-types */
import { memo } from 'react';

const Content = ({ onIncrement }) => {
  console.log('re-render-content');
  return (
    <>
      <div >Content</div>
      <button onClick={onIncrement}>Click Me !!!</button>
    </>
  );
};

export default memo(Content);
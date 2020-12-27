import React from 'react';
import { CustomAppbar } from './styles';

const Appbar = ({ children, ...props }) => {
  return (
    <CustomAppbar
      {...props}
    >
      {children}
    </CustomAppbar>
  );
}

export default Appbar;
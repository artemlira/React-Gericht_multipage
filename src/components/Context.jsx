import React, { useRef, createContext } from 'react';
import PropTypes from 'prop-types';

export const GerichtContext = createContext();

const Context = (props) => {
  const ref = useRef(null);

  const value = {
    ref
  };
  return (
    <GerichtContext.Provider value={value}>{props.children}</GerichtContext.Provider>
  );
};

export default Context;

Context.propTypes = {
  children: PropTypes.array.isRequired
};

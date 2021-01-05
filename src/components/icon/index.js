import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Icon({ source, style }) {
  if (!source) {
    return null;
  }

  return (
    <Image source={source} style={[styles.base, style]} resizeMode='contain' />
  );
}

Icon.propTypes = {
  source: PropTypes.any
};

Icon.defaultProps = {
  source: undefined,
  style: undefined
};

export default Icon;

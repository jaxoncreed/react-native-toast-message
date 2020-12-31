import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import Icon from '../icon';
import { icons } from '../../assets';
import styles, { HEIGHT } from './styles';

function BaseToast({
  leadingIcon,
  trailingIcon,
  text1,
  text2,
  onPress,
  onLeadingIconPress,
  onTrailingIconPress,
  style,
  leadingIconContainerStyle,
  trailingIconContainerStyle,
  leadingIconStyle,
  trailingIconStyle,
  contentContainerStyle,
  text1Style,
  text2Style,
  activeOpacity
}) {
  return (
    <TouchableOpacity
      style={[styles.base, styles.borderLeft, style]}
      onPress={onPress}
      activeOpacity={onPress ? activeOpacity : 1}>
      {leadingIcon && (
        <TouchableOpacity
          style={[styles.leadingIconContainer, leadingIconContainerStyle]}
          onPress={onLeadingIconPress}
          activeOpacity={onLeadingIconPress ? activeOpacity : 1}>
          <Icon
            style={[styles.leadingIcon, leadingIconStyle]}
            source={leadingIcon}
          />
        </TouchableOpacity>
      )}

      <View style={[styles.contentContainer, contentContainerStyle]}>
        {text1?.length > 0 && (
          <View>
            <Text style={[styles.text1, text1Style]} numberOfLines={1}>
              {text1}
            </Text>
          </View>
        )}
        {text2?.length > 0 && (
          <View>
            <Text style={[styles.text2, text2Style]} numberOfLines={2}>
              {text2}
            </Text>
          </View>
        )}
      </View>

      {trailingIcon && (
        <TouchableOpacity
          style={[styles.trailingIconContainer, trailingIconContainerStyle]}
          onPress={onTrailingIconPress}
          activeOpacity={onTrailingIconPress ? activeOpacity : 1}>
          <Icon
            style={[styles.trailingIcon, trailingIconStyle]}
            source={trailingIcon}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

BaseToast.HEIGHT = HEIGHT;

BaseToast.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  onPress: PropTypes.func,
  onTrailingIconPress: PropTypes.func,
  onLeadingIconPress: PropTypes.func,
  activeOpacity: PropTypes.number
};

BaseToast.defaultProps = {
  leadingIcon: undefined,
  trailingIcon: icons.close,
  text1: undefined,
  text2: undefined,
  onPress: undefined,
  onLeadingIconPress: undefined,
  onTrailingIconPress: undefined,
  style: undefined,
  leadingIconContainerStyle: undefined,
  trailingIconContainerStyle: undefined,
  leadingIconStyle: undefined,
  trailingIconStyle: undefined,
  contentContainerStyle: undefined,
  text1Style: undefined,
  text2Style: undefined,
  activeOpacity: 0.8
};

export default BaseToast;

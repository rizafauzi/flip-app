import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

import styles from './text-input.style'
import { Colors } from '../../styles'

const MyTextInput = ({
  ref,
  color,
  style,
  onBlur,
  onFocus,
  testID,
  onChange,
  maxLength,
  autoFocus,
  value = '',
  placeholder,
  onChangeText,
  editable = true,
  secureTextEntry,
  onSubmitEditing,
  accessibilityLabel,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  placeholderTextColor = Colors.Grey,
}) => {
  return (
    <TextInput
      ref={ref}
      accessible
      value={value}
      onBlur={onBlur}
      testID={testID}
      onFocus={onFocus}
      accessible={true}
      onChange={onChange}
      editable={editable}
      maxLength={maxLength}
      autoFocus={autoFocus}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      autoCapitalize={autoCapitalize}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={secureTextEntry}
      accessibilityLabel={accessibilityLabel}
      style={[style, styles.container(color)]}
      placeholderTextColor={placeholderTextColor}
    />
  )
}

TextInput.propTypes = {
  ref: PropTypes.any,
  style: PropTypes.any,
  value: PropTypes.any,
  color: PropTypes.any,
  onBlur: PropTypes.any,
  testID: PropTypes.any,
  onFocus: PropTypes.any,
  onChange: PropTypes.any,
  maxLength: PropTypes.any,
  autoFocus: PropTypes.any,
  placeholder: PropTypes.any,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.any,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  accessibilityLabel: PropTypes.any,
  placeholderTextColor: PropTypes.any,
}

export default MyTextInput

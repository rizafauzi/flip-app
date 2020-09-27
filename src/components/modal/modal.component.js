import React from 'react'
import styles from './modal.style'
import { Modal as RNModal, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native'

const ModalForm = ({ isVisible, onClose, contentStyle, children, wrapperColor }) => {
  return (
    <RNModal animationType="fade" transparent={true} visible={isVisible} onRequestClose={onClose}>
      <TouchableNativeFeedback onPress={onClose}>
        <View style={[{ backgroundColor: wrapperColor ? wrapperColor : 'rgba(0,0,0,0.5)' }, styles.wrapper]}>
          <TouchableWithoutFeedback>
            <View style={[styles.content, contentStyle]}>{children}</View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableNativeFeedback>
    </RNModal>
  )
}

export default ModalForm

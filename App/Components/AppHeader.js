import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'

// styles
import styles from './Styles/AppHeaderStyle'

const AppHeader = props => {
  const { left, right } = props

  return (
    <View style={styles.container}>
      {left}
      {right}
    </View>
  )
}

// Prop type warnings
AppHeader.propTypes = {
  left: PropTypes.element,
  right: PropTypes.element,
}

// Defaults for props
AppHeader.defaultProps = {
  left: <View />,
  right: <View />
}

export default memo(AppHeader)

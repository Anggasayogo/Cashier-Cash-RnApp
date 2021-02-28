import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableNativeFeedback,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native'

// Styles
import styles from './Styles/FullButtonStyle'
import { apply } from '../Themes/OsmiProvider'

const FullButton = props => {
  const { style, ripple, fetching, fetchColor } = props

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.9} {...props} disabled={fetching}>
      {
        fetching ? (
          <ActivityIndicator size="small" color={apply(fetchColor)}/>
        ) : props.children
      }
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple(apply(ripple === 'white' ? 'white-soft' : 'black-soft'))}
    {...props}>
      <View style={style}>
      {
        fetching ? (
          <ActivityIndicator size="small" color={apply(fetchColor)}/>
        ) : props.children
      }
      </View>
    </TouchableNativeFeedback>
  )
}

// Prop type warnings
FullButton.propTypes = {
  ripple: PropTypes.string,
  fetching: PropTypes.bool,
  fetchColor: PropTypes.string
}

// Defaults for props
FullButton.defaultProps = {
  ripple: 'white',
  fetching: false,
  fetchColor: 'white'
}


export default memo(FullButton)

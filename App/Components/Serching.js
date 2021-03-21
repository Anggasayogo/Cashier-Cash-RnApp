import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, TextInput, Image } from 'react-native'

// Styles
import styles from './Styles/SerchingStyle'
import { apply } from '../Themes/OsmiProvider'
import Images from '../Images'

const Serching = props => {
  return (
    <View style={styles.container}>
      <View style={apply("row justify-center")}>
        <TextInput placeholder="Search Product" style={apply("flex border border-gray-default rounded rounded-10 h-44 px-5 py-1")}/>
        <View style={apply("justify-center items-center ml--3")}>
          <Image source={Images.IcSearch} style={apply("w-24 h-24")}/>
        </View>
        <View style={apply("justify-center items-center pl-3")}>
          <Image source={Images.IcFilter} style={apply("w-24 h-24")}/>
        </View>
      </View>
    </View>
  )
}

// // Prop type warnings
// Serching.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// Serching.defaultProps = {
//   someSetting: false
// }

export default memo(Serching)

import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'
import Images from '../Images'

// Styles
import styles from './Styles/ProdukCardStyle'
import { apply } from '../Themes/OsmiProvider'
import { ap } from 'ramda'

const ProdukCard = props => {
  const { item, type } = props

  if(type == 'vertical'){
    return(
      <>
        <View style={apply("row items-center my-2")}>
          <Image source={Images.DumyProduk} style={apply("w-94 h-64 rounded-md")}/>
          <View style={apply("ml-2 flex")}>
            <Text style={apply("text-14 font-regular")}>Sate padang bang aji</Text>
          </View>
          <View style={apply("bg-primary w-20 h-20 rounded rounded-md")}/>
        </View>
        <View style={apply("border border-gray-soft")}/>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <Image source={Images.DumyProduk} style={apply("w-127 h-105 rouned-10")}/>
      <View style={apply("mx-2 my-3")}>
        <Text style={apply("font-regular")}>Sate Padang</Text>
        <Text style={apply("font-regular")}>Rp,12.000</Text>
      </View>
    </View>
  )
}

// // Prop type warnings
// ProdukCard.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// ProdukCard.defaultProps = {
//   someSetting: false
// }

export default memo(ProdukCard)

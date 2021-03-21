import React, { memo } from 'react'
// import PropTypes from 'prop-types'
import { View, Text, Image, Animated } from 'react-native'
import Images from '../Images'
import FullButton from './FullButton'

// Styles
import styles from './Styles/ProdukCardStyle'
import { apply } from '../Themes/OsmiProvider'

const ProdukCard = props => {
  const { item, type, data } = props
  const anim = new Animated.Value(0)

  const _handleClick = (item) => {
    Animated.timing(anim, {
      toValue: 0,
      duration: 5000
    }).start();
    props.onPress(item)
  }

  if(type == 'vertical'){
    return(
      <>
        <View style={apply("row items-center my-3")}>
          <Image source={Images.DumyProduk} style={apply("w-94 h-64 rounded-md")}/>
          <View style={apply("ml-2 flex")}>
            <Text style={apply("text-14 font-medium")}>{item?.name}</Text>
            <Text style={apply("font-regular py-1")}>Avilable : {item?.stock}</Text>
            <Text style={apply("font-regular")}>Rp,{item?.harga}</Text>
          </View>
          <FullButton onPress={()=> _handleClick(item)}>
            {
              data?.includes(item) ? (
                <Animated.Image source={Images.IcActive} style={apply("w-20 h-20")}/>
              ) : (
                <Animated.View style={apply("border-gray-default border w-20 h-20 rounded rounded-md")}/>
              )
            }
          </FullButton>
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

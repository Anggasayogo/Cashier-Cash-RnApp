import React, { useEffect } from 'react'
import { Text, View, Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { connect } from 'react-redux'
import Images from '../Images'

// Styles
import styles from './Styles/LaunchScreenStyle'
import { apply } from '../Themes/OsmiProvider'



const LaunchScreen = props => {
  useEffect(()=>{
    setTimeout(()=>{
      // props.navigation.replace('Onboarding')
      props.navigation.navigate('MainApp')
    },5000)
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrraperLogo}>
        <Text style={styles.title}>Cashier Cash</Text>
        <Image source={Images.IcWallet} style={styles.logo}/>
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)

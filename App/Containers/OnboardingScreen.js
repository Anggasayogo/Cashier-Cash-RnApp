import React, { useCallback } from 'react'
import {
  StatusBar,
  Image,
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'
import SwipperFlatList from 'react-native-swiper-flatlist'
import Images from '../Images'
import SafeAreaView from 'react-native-safe-area-view'

// Components
import FullButton from '../Components/FullButton'

// Styles
import styles from './Styles/OnboardingScreenStyle'
import { apply } from '../Themes/OsmiProvider'

const OnboardingScreen = props => {
  const onSignup = useCallback(() => props.navigation.navigate('Register'), [])
  const list = [{
    image: Images.bgOnBoard1,
    title: 'Bebas Pilih Tanpa Ribet',
    desc: 'Kemudahan mencari kebutuhanmu tanpa perlu ngantri atau pergi keluar'
  },{
    image: Images.bgOnBoard2,
    title: 'Menu Terbaik Setiap Hari',
    desc: '1000+ menu terbaik dari persembahan spesial tidak akan membuatmu kecewa '
  },{
    image: Images.bgOnBoard3,
    title: 'Pembayaran Mudah dan Aman',
    desc: 'Di support dengan berbagai macam metode pembayaran untuk memudahkanmu'
  }]

  const render = ({ item, index }) => {
    return (
      <View>
        <Image style={styles.image} source={item?.image} />
        <View key={index} style={styles.top}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.desc}>{item?.desc}</Text>
        </View>
      </View>
    )
  }

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {/*<Image source={list[0].image} style={apply('w-120 h-120')} />*/}
        <SwipperFlatList
          data={list}
          renderAll
          keyExtractor={(item, index) => index.toString()}
          renderItem={render}
          index={0}
          style={apply('z-0 flex')}
          showPagination
          paginationStyle={apply('mb-48')}
          paginationStyleItem={apply('w-10 h-10 mx-1')}
        />
        <View style={styles.bottom}>
          <FullButton style={styles.button} onPress={onSignup}>
            <Text style={styles.label}>Daftar Cashier</Text>
          </FullButton>
          <Text style={styles.haveAccount}>Sudah punya akun? <Text onPress={() => props.navigation.navigate('Login')} style={styles.login}>Login</Text></Text>
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)

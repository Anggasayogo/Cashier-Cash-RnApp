import React from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Styles
import styles from '../Styles/Home/HomeScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const HomeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen Container</Text>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

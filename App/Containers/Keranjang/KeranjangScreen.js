import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, FlatList } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Components
import ProdukCard from '../../Components/ProdukCard'

// Styles
import styles from '../Styles/Keranjang/KeranjangScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const KeranjangScreen = props => {
  const [data,setData] = useState([
    {
        name: "January",
        population: 48.0,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "white",
        legendFontSize: 11
    },{
        name: "February",
        population: 39.2,
        color: "red",
        legendFontColor: "white",
        legendFontSize: 11
    },{
        name: "Maret",
        population: 34.2,
        color: "yellow",
        legendFontColor: "white",
        legendFontSize: 11
    },{
        name: "April",
        population: 14.2,
        color: "orange",
        legendFontColor: "white",
        legendFontSize: 11
    }
  ])

  return (
    <SafeAreaView style={styles.container}>
      <Text>KeranjangScreen Container</Text>
      <FlatList
        data={data}
        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item})=> <ProdukCard item={item} type="vertical"/>}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(KeranjangScreen)

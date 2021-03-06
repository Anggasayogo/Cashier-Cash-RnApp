import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View,Dimensions,Text, FlatList,ScrollView,Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import Images from '../../Images'

// Components
import ProdukCard from '../../Components/ProdukCard'

// Styles
import styles from '../Styles/Home/HomeScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const screenWidth = Dimensions.get("window").width;
const HomeScreen = props => {
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

  const RenderTransaksi = ({item}) =>{
    return(
      <View>
        <View style={apply("row items-center")}>
          <View style={apply("flex")}>
            <Text style={apply("font-regular my-1")}>{item?.name}</Text>
            <Text style={apply("font-medium mb-1")}>Rp,56.000</Text>
            <Text style={apply("font-regular")}>Pembayaran Transaksi  17:00 27-02-20201</Text>
          </View>
          <Image source={Images.IcNext} style={apply("w-8 h-14")} resizeMode="stretch"/>
        </View>
        <View style={apply("border-1 border-gray-soft my-2")}/>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={apply("row items-center justify-end mt-5 mb-2")}>
          <Image source={Images.IcSearch} style={apply("w-24 h-24")}/>
          <Image source={Images.IcBell} style={apply("w-24 h-24")}/>
      </View>
      <View style={apply("row items-center mb-3")}> 
        <View style={apply("flex")}>
          <Text style={apply("font-regular text-18")}>Selamat Pagi</Text>
          <Text style={apply("py-1 font-regular text-14")}>Angga Maulana</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item,index)=> index.toString()}
          renderItem={({item}) =>(
            <View style={apply('mx-2')}>
              <ProdukCard item={item}/>
            </View>
          )}
          horizontal={true}
        />
      </View>
      <Text style={apply("py-3 font-medium text-14")}>Top Rate Transaksi</Text>
      <View style={apply("shadow shadow-lg bg-white rounded rounded-md my-3 mx-1 px-3")}>
        <FlatList
          data={data}
          keyExtractor={(item,index)=> index.toString()}
          renderItem={({item})=> <RenderTransaksi item={item}/>}
        />
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

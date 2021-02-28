import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View,Dimensions,Text, FlatList,ScrollView,Image } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { PieChart } from "react-native-chart-kit";
import Images from '../../Images';

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
    },{
        name: "Mei",
        population: 12.4,
        color: "#0000FF",
        legendFontColor: "white",
        legendFontSize: 11
    },{
      name: "Juni",
      population: 12.4,
      color: "#00FF00",
      legendFontColor: "white",
      legendFontSize: 11
    },{
      name: "July",
      population: 12.4,
      color: "#FF00FF",
      legendFontColor: "white",
      legendFontSize: 11
    },{
      name: "Agustus",
      population: 12.4,
      color: "#EEE8AA",
      legendFontColor: "white",
      legendFontSize: 11
    },{
      name: "September",
      population: 12.4,
      color: "#00CED1",
      legendFontColor: "white",
      legendFontSize: 11
    },{
      name: "Oktober",
      population: 12.4,
      color: "#8B008B",
      legendFontColor: "white",
      legendFontSize: 11
    },{
      name: "November",
      population: 12.4,
      color: "#A0522D",
      legendFontColor: "white",
      legendFontSize: 11
    },{
      name: "Desember",
      population: 12.4,
      color: "#696969",
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
      <Text style={apply("py-3 mx-4 font-medium text-14")}>Analityc Transaksi</Text>
      <View style={apply("shadow bg-white mx-3 rounded rounded-md")}>
        <PieChart
          data={data}
          width={Dimensions.get("window").width - 24}
          height={230}
          chartConfig={{
              color: (opacity = 1) => `white`,
              labelColor: (opacity = 1) => `white`,
              style: {
                  borderRadius: 5
              }
          }}
          backgroundColor="#048f15"
          accessor="population"
          paddingLeft="15"
          absolute
          style={{
              marginVertical: 8,
              borderRadius: 5
          }}
        />
      </View>
      <Text style={apply("py-3 mx-4 font-medium text-14")}>Top Rate Transaksi</Text>
      <View style={apply("shadow bg-white mx-3 px-3 rounded rounded-md")}>
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

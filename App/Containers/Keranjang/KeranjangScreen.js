import React, { useState } from 'react'
import { connect } from 'react-redux'
import { 
  RefreshControl, 
  FlatList,
  Animated, 
  Text, 
  View, 
} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

// Components
import ProdukCard from '../../Components/ProdukCard'
import FullButton from '../../Components/FullButton'
import Serching from '../../Components/Serching'
import Images from '../../Images'

// Styles
import styles from '../Styles/Keranjang/KeranjangScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const KeranjangScreen = props => {
  const [type,setType] = useState(['Semau','Makanan','Minuman','Camilan','Hot drink','cold drink'])
  const [refreshing, setRefreshing] = useState(false)
  const [typeselec,setTypeSelec] = useState('')
  const [selected,setSelected] = useState([])
  const [data,setData] = useState([
    {
        name: "Sate Bang Jali",
        population: 48.0,
        harga: 12000,
        stock: 11
    },{
        name: "Mie Ayam Bang Jago",
        population: 39.2,
        harga: 12000,
        stock: 11
    },{
        name: "Teh Tarik",
        population: 34.2,
        harga: 3000,
        stock: 11
    },{
        name: "Minoah Jati",
        population: 14.2,
        harga: 12000,
        stock: 3
    },{
        name: "Nasi Jamblang",
        population: 14.2,
        harga: 17000,
        stock: 3
    },{
        name: "Martabak Manis",
        population: 14.2,
        harga: 25000,
        stock: 3
    },
  ])
  const anim = new Animated.Value(0)
  const handleActivate = (item)=>{
    const newData = [...selected]
    if(newData.some(x => x === item)){
      const i = newData.findIndex(x => x == item)
      newData.splice(i,1)
      setSelected(newData)
    }else{
      newData.push(item)
      setSelected(newData)
    }
  }
  const _selectAll = ()=>{
    Animated.timing(anim, {
      toValue: 0,
      duration: 5000
    }).start();
    selected?.length === data.length ?
    setSelected([]) : setSelected(data) 
  }
  const _handleSelectCat = (item)=>{
    type.map((obj)=>{
      if(obj === item){
        setTypeSelec(item)
      }
    })
  }
  const  _onRefresh = ()=>{

  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={apply("bg-white shadow px-3 py-3")}>
        <Serching/>
        <View style={apply("mt-3")}>
          <FlatList
            data={type}
            keyExtractor={(item,index)=> index.toString()}
            renderItem={({item})=>(
              <FullButton onPress={()=> _handleSelectCat(item)} style={[apply("border bg-white px-2 rounded rounded-lg mx-1 items-center justify-center"),item == typeselec ? apply("border-primary") : apply("border-gray-default") ]}>
                <Text style={[apply("text-sm font-regular my-1"),item == typeselec ? apply("text-primary") : apply("text-black")]}>{item}</Text>
              </FullButton>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={apply("px-3 pt-3 flex")}>
        <FlatList
          data={data}
          keyExtractor={(item,index)=> index.toString()}
          renderItem={({item})=> <ProdukCard data={selected} onPress={(item)=> handleActivate(item)} item={item} type="vertical"/>}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => _onRefresh()} />
          }
        />
      </View>
      {
        selected.length > 0 && (
          <View style={apply("bg-white shadow shadow-md h-71 px-3 py-3 row items-center")}>
            <View style={apply("flex")}>
              <FullButton style={apply("h-45 bg-primary rounded rounded-10 justify-center items-center")}   label="Tambahkan Ke keranjang">
                <Text style={apply("font-semibold text-14 text-white py-4")}>Tambah Keranjang</Text>
              </FullButton>
              </View>
              <View style={apply("row items-center flex justify-end")}>
                <Text style={apply("font-regular text-14")}>Pilih Semua</Text>
                <FullButton onPress={()=>_selectAll()}>
                {
                  selected?.length === data.length ?(
                  <Animated.Image source={Images.IcActive} style={apply("w-20 h-20 ml-5")}/>
                  ):(<Animated.View style={apply("border-gray-default border w-20 h-20 rounded rounded-md ml-5")}/>)
                }
                </FullButton>
              </View>
          </View>
        )
      }
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(KeranjangScreen)

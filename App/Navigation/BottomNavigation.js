import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Images from '../Images';

// Styles
import { apply } from '../Themes/OsmiProvider'

// Screen
import Home from '../Containers/Home/HomeScreen';
import Keranjang from '../Containers/Keranjang/KeranjangScreen';
import Barang from '../Containers/Barang/BarangScreen';
import Wallet from '../Containers/Wallet/WalletScreen';
import Account from '../Containers/Account/AcountScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Keranjang" component={Keranjang} />
      <Tab.Screen name="Barang" component={Barang} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const RenderIcons = props =>{
  const { label, isFocused } = props
  const Icon = () =>{
    switch (label) {
      case 'Home':
        return <Image source={isFocused ? Images.IcHomeActive : Images.IcHomeDisable} style={apply("w-24 h-24")}/>
      case 'Keranjang':
        return <Image source={isFocused ? Images.IcCartActive : Images.IcCartDisable} style={apply("w-24 h-24")}/>
      case 'Barang':
        return <Image source={isFocused ? Images.IcBarangActive : Images.IcBarangDisable} style={apply("w-24 h-24")}/>
      case 'Wallet':
        return <Image source={isFocused ? Images.IcWalletActive : Images.IcWalletDisable} style={apply("w-24 h-24")}/>
      case 'Account':
        return <Image source={isFocused ? Images.IcAccountActive : Images.IcAccountDisable} style={apply("w-24 h-24")}/>
      default:
        return <Image source={isFocused ? Images.IcHomeActive : Images.IcHomeDisable} style={apply("w-24 h-24")}/>
          
    }
  }
  return(
    <>
      <Icon/>
      <Text style={isFocused ? apply("text-12 font-medium text-primary") : apply("text-12 font-medium text-black")}>{label}</Text>
    </>
  )
}

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={apply("row shadow shadow-lg")}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={apply("flex items-center justify-center bg-white py-2 btw-1")}
            activeOpacity={0.9}
          >
            <View style={apply("items-center")}>
              <RenderIcons isFocused={isFocused} label={label}/>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomTabNavigator;
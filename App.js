import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/components/SearchScreen';
import TabNavigatorComp from './src/components/TabNavigatorComp';
import Home from './src/screens/Home';

//Remove this at certain times
console.disableYellowBox = true;


export default function App() {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',

      }}>


      <TabNavigatorComp />
      {/* <SearchScreen /> */}
      <StatusBar style="light" backgroundColor="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

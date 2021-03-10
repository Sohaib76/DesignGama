import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { FAB } from 'react-native-paper';
import CallList from '../components/CallList';
import HeaderMenu from '../components/HeaderMenu';


const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Will contact you in a moment.'
    , date: "Thu"
    , status: "success",
    tag: "Hiring Developers"

  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Ok, You should contact him.'
    , date: "9/22/2020"
    , status: "warning",
    tag: "Killing time"
  },

]


export default function Calls({ navigation }) {
  return (
    <View style={{ backgroundColor: "#000", height: "100%" }}>
      <HeaderMenu isCenterText={true} leftIcon="video-outline" rightIcon="magnify" text="Calls" callMenu={true}
        backIcon="bell-outline" inCenter={true}
        twoIcons={true}
        rightBtn={() => navigation.navigate("Search2")}
        notBtn={() => navigation.navigate("Notifications")}
        searchBtn={() => Alert.alert("Camera", "Grant Skype Permission to access your camera.",
          [{
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => navigation.navigate("VideoChat") }

          ], { cancelable: false }


        )}
      />
      <ScrollView>
        <CallList sectionHeading="RECENT CALLS" namesList={list} />
        <CallList sectionHeading="SUGGESTED" namesList={[list[0]]} />
        <CallList sectionHeading="PEOPLE" namesList={list.slice(0, 2)} />

      </ScrollView>


      <FAB
        style={styles.fab2}
        large
        icon="dialpad"
        color="#fff"

        onPress={() => console.log('Pressed')}
      />
      <FAB
        style={styles.fab}
        large
        icon="phone-plus"
        color="#0090ce"

        onPress={() => navigation.navigate("NewCall")}
      />



    </View>
  )
}




const styles = StyleSheet.create({

  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",


    borderRadius: 50,
    borderColor: "#0090ce"

  },
  fab2: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 80,
    backgroundColor: "#0277BD"

  },
});

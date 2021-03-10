import React, { useState } from 'react'
import { View, } from 'react-native'
import { Provider, FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Avatar, Badge, ListItem } from 'react-native-elements';
import HeaderMenu from '../components/HeaderMenu';
import { ScrollView } from 'react-native-gesture-handler';

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




export default function Home({ navigation }) {

  const [size, setsize] = useState(false)

  return (

    <Provider >
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <HeaderMenu
          backIcon="bell-outline" notBtn={() => navigation.navigate("Notifications")}
          searchBtn={() => navigation.navigate("Search2")}
          isCenterText={false} leftIcon="magnify" rightIcon="dots-vertical" text="" chatMenu={true} />

        <ScrollView >
          {
            list.map((l, i) => (
              <View key={i}>
                <ListItem
                  onPress={() => navigation.navigate("Message")}
                  containerStyle={{ backgroundColor: '#000' }}>
                  <View>
                    <Avatar rounded size='large' source={{ uri: l.avatar_url }} />
                    <Badge
                      status={l.status}
                      badgeStyle={{ height: 15, width: 15, borderRadius: 40 }}
                      containerStyle={{ position: 'absolute', bottom: 4, right: 6 }}
                    />
                  </View>

                  <ListItem.Content style={{ flex: 2.8 }}>
                    <ListItem.Title style={{ color: "white" }}>{l.name}</ListItem.Title>
                    <ListItem.Subtitle style={{ color: "grey" }}>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Content style={{ alignItems: 'flex-end' }}>
                    <ListItem.Subtitle style={{ color: "grey" }}>{l.date}</ListItem.Subtitle>
                    <ListItem.Subtitle></ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>

                <View style={{ marginLeft: 100, height: 1, width: '70%', backgroundColor: "grey", opacity: 0.3 }}></View>
              </View>
            ))
          }
        </ScrollView>

        <FAB
          style={styles.fab}
          small={size}
          icon="pencil-outline"
          color="#fff"
          animated={true}
          onPress={() => {
            setsize(!size)
            console.log('Pressed', size)
            setTimeout(function () {

              setsize(false)
            }.bind(this), 100)
            navigation.navigate("NewContact")



          }}
        />


      </View>

    </Provider>


  )
}

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#0090ce"

  },
});

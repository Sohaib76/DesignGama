import * as React from 'react';
import { Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Calls from '../screens/Calls';
import Contacts from '../screens/Contacts';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import Invite from '../screens/Invite';
// import { Button, } from 'react-native-paper';
import { Icon, Button } from 'react-native-elements'
import AddNumber from '../screens/AddNumber';
import SearchScreen2 from '../screens/SearchScreen2';
import Notifications from '../screens/Notifications';
import NavigationSetting from '../screens/NavigationSetting';
import VideoChat from '../screens/VideoChat';
import NewCall from '../screens/NewCall';
import NewContact from '../screens/NewContact';
import Message from '../screens/Message';



const ContactsStack = createStackNavigator();




function ContactsStackScreen({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false })
  }
  else {
    navigation.setOptions({ tabBarVisible: true })
  }


  return (
    <ContactsStack.Navigator initialRouteName="Contacts">
      <ContactsStack.Screen
        options={{ headerShown: false, }}
        name="Contacts" component={Contacts} />
      <ContactsStack.Screen
        options={{ headerShown: false, }}
        name="Search" component={SearchScreen} />
      <ContactsStack.Screen
        options={{ headerShown: false, }}
        name="Search2" component={SearchScreen2} />


      <ContactsStack.Screen
        // options={{ headerShown: false, }}
        name="NavigationSetting" component={NavigationSetting}
        options={{
          headerTitle: "Notifications",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='keyboard-backspace'
              type="materialicons"
              color="#fff"
              onPress={() => { navigation.navigate("Notifications") }} />
          ),
        }}
      />

      <ContactsStack.Screen
        options={{
          headerTitle: "Share and connect",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='keyboard-backspace'
              type="materialicons"
              color="#fff"
              onPress={() => { navigation.navigate("Search") }} />
          ),
        }}
        name="Invite" component={Invite} />


      <ContactsStack.Screen
        options={{
          headerTitle: "Add phone number",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='keyboard-backspace'
              type="materialicons"
              color="#fff"
              onPress={() => { navigation.navigate("Search") }} />
          ),
          headerRight: () => (
            <Button
              title="Save"
              type="standard"
              color="white"

            />
          )
        }}

        name="AddNumber" component={AddNumber} />



      <ContactsStack.Screen
        options={{
          headerTitle: "Notifications",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='keyboard-backspace'
              type="materialicons"
              color="#fff"
              onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'Contacts' }],
              })} />
          ),
          headerRight: () => (
            <Icon
              name="dots-vertical"
              type='material-community'
              color='#fff'
              size={30}
              onPress={() => navigation.navigate("NavigationSetting")}
            />
          )
        }}

        name="Notifications" component={Notifications} />
    </ContactsStack.Navigator>
  );
}



const CallsStack = createStackNavigator();

function CallsStackScreen({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false })
  }
  else {
    navigation.setOptions({ tabBarVisible: true })
  }

  return (
    <CallsStack.Navigator initialRouteName="Contacts">
      <CallsStack.Screen
        options={{ headerShown: false, }}
        name="Calls" component={Calls} />

      <CallsStack.Screen
        options={{ headerShown: false, }}
        name="Search2" component={SearchScreen2} />


      <CallsStack.Screen
        options={{
          headerTitle: "Notifications",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='keyboard-backspace'
              type="materialicons"
              color="#fff"
              onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'Calls' }],
              })} />
          ),
          headerRight: () => (
            <Icon
              name="dots-vertical"
              type='material-community'
              color='#fff'
              size={30}
              onPress={() => navigation.navigate("NavigationSetting")}
            />
          )
        }}

        name="Notifications" component={Notifications} />

      <CallsStack.Screen
        // options={{ headerShown: false, }}
        name="NavigationSetting" component={NavigationSetting}
        options={{
          headerTitle: "Notifications",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='keyboard-backspace'
              type="materialicons"
              color="#fff"
              onPress={() => { navigation.navigate("Notifications") }} />
          ),
        }}
      />

      <CallsStack.Screen
        // options={{ headerShown: false, }}
        name="VideoChat" component={VideoChat}
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "#000" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='cross'
              type="entypo"
              color="#fff"
              onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'Calls' }],
              })} />
          ),
        }}
      />

      <CallsStack.Screen name="NewCall" component={NewCall}
        options={{ headerShown: false }}
      />
    </CallsStack.Navigator>

  )
}

const HomeStack = createStackNavigator();

function HomeStackScreen({ navigation, route }) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false })
  }
  else {
    navigation.setOptions({ tabBarVisible: true })
  }


  return (
    <HomeStack.Navigator initialRouteName="Chats">
      <HomeStack.Screen
        options={{ headerShown: false, }}
        name="Chats" component={Home} />

      <HomeStack.Screen
        options={{ headerShown: false, }}
        name="NewContact" component={NewContact} />

      <HomeStack.Screen
        options={{
          headerTitle: "Notifications",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='keyboard-backspace'
              type="materialicons"
              color="#fff"
              onPress={() => navigation.reset({
                index: 0,
                routes: [{ name: 'Chats' }],
              })} />
          ),
          headerRight: () => (
            <Icon
              name="dots-vertical"
              type='material-community'
              color='#fff'
              size={30}
              onPress={() => navigation.navigate("NavigationSetting")}
            />
          )
        }}

        name="Notifications" component={Notifications} />


      <HomeStack.Screen
        // options={{ headerShown: false, }}
        name="NavigationSetting" component={NavigationSetting}
        options={{
          headerTitle: "Notifications",
          headerStyle: { backgroundColor: '#000' },
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Icon name='keyboard-backspace'
              type="materialicons"
              color="#fff"
              onPress={() => { navigation.navigate("Notifications") }} />
          ),
        }}
      />

      <HomeStack.Screen
        options={{ headerShown: false, }}
        name="Search2" component={SearchScreen2} />

      <HomeStack.Screen
        options={{ headerShown: false, }}
        name="Message" component={Message} />

    </HomeStack.Navigator>
  )

}





function HomeScreen() {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Home />
    </View>

  );
}

function CallsScreen() {
  return (
    <View>
      <Calls />
    </View>
  );
}

function ContactsScreen() {
  return (
    <View >
      <Contacts />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigatorComp() {
  return (
    <NavigationContainer>
      <Tab.Navigator



        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Chats') {
              iconName = focused
                ? 'chat'
                : 'chat';
            } else if (route.name === 'Calls') {
              iconName = focused ? 'call' : 'call';
            }
            else if (route.name === 'Contacts') {
              iconName = focused ? 'contacts' : 'contacts';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: '#0090ce',
          inactiveTintColor: 'white',
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: "red",
          tabStyle: { height: "170%", paddingBottom: 40, backgroundColor: "black" }

        }}

      >
        <Tab.Screen name="Chats" component={HomeStackScreen} />
        <Tab.Screen name="Calls" component={CallsStackScreen} />
        <Tab.Screen name="Contacts" component={ContactsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
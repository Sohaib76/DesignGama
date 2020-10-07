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
    </ContactsStack.Navigator>
  );
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
        <Tab.Screen name="Chats" component={HomeScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
        <Tab.Screen name="Contacts" component={ContactsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
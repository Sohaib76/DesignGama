import React from 'react'
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { SearchBar, Icon } from 'react-native-elements';
import { List } from 'react-native-paper';

export default function SearchScreen({ navigation }) {


    const [searchQuery, setSearchQuery] = React.useState('');

    const updateSearch = query => setSearchQuery(query);

    return (
        <View style={{ height: "100%", backgroundColor: "#000" }}>
            {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} */}
            {/* style={{ marginTop: 40 }}
          enabled={false}
        > */}
            <SearchBar
                placeholder={"Search"}
                onChangeText={updateSearch}
                value={searchQuery}
                inputStyle={{ fontSize: 30, color: "white", fontWeight: "bold" }}
                platform="default"
                placeholderTextColor="#ccf6ff"
                containerStyle={{ backgroundColor: '#0090ce', height: "25%", paddingTop: 50 }}
                inputContainerStyle={{
                    backgroundColor: "#0090ce", height: "100%",

                }}
                searchIcon={() => <Icon
                    name='keyboard-backspace'
                    type='materialicons'
                    color='#fff'


                />}
                clearIcon={() => <Icon
                    name='close-o'
                    type='evilicon'
                    color='#fff'
                    size={30}
                    onPress={() => setSearchQuery("")}


                />}
            />

            <Text style={{ color: "grey", fontSize: 15, margin: 20 }}
            >Search for people using their Skype Name, phone number, email or full name.</Text>


            <List.Section>
                <List.Subheader style={{ fontSize: 18, color: "white" }}>Other ways to add people</List.Subheader>
                <List.Item
                    titleStyle={{ color: "white", fontSize: 18 }}
                    descriptionStyle={{ color: "grey" }}
                    title="Invite to Skype"
                    description="Invite friends to Skype via SMS, email and more."
                    left={() => <List.Icon icon="skype" color="white" />}
                    onPress={() => navigation.navigate("Invite")}
                />

                <List.Item
                    titleStyle={{ color: "white", fontSize: 18 }}
                    descriptionStyle={{ color: "grey" }}
                    title="Add a phone number"
                    description="Save a number to your Skype contacts."
                    left={() => <List.Icon icon="phone-classic" color="white" />}
                    onPress={() => navigation.navigate("AddNumber")} />

            </List.Section>
        </View>
    )
}

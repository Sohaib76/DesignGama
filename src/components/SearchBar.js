import React from 'react'
import { View, Text } from 'react-native'
import { SearchBar, Icon, Avatar, Badge } from 'react-native-elements';


export default function SearchBarComponent({ navigation }) {
    const [searchQuery, setSearchQuery] = React.useState('');

    const updateSearch = query => setSearchQuery(query);

    return (



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
                onPress={() => navigation.goBack()}


            />}
            clearIcon={() => <Icon
                name='close-o'
                type='evilicon'
                color='#fff'
                size={30}
                onPress={() => setSearchQuery("")}


            />}
        />


    )
}

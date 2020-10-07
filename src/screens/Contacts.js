import React from 'react'
import { View, Text } from 'react-native'
import HeaderMenu from '../components/HeaderMenu'
import { Avatar, Badge, Divider } from 'react-native-elements';
import { List } from 'react-native-paper';
import { FAB } from 'react-native-paper';


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




export default function Contacts({ navigation }) {
    return (
        <View style={{ backgroundColor: "black", height: "100%" }}>
            <HeaderMenu isCenterText={true} leftIcon="magnify" rightIcon="dots-vertical" text="Contacts" />
            {
                list.map((l, i) => (
                    <View key={i}>
                        <List.Section>
                            <List.Subheader style={{ fontWeight: "bold", color: "#bababa" }}>{l.name[0]}</List.Subheader>
                            <List.Item titleStyle={{ color: "white", marginLeft: 10 }} title={l.name}
                                description={l.tag}
                                descriptionStyle={{ color: "grey", marginLeft: 10 }}></List.Item>
                            <Divider style={{ marginLeft: 50, marginRight: 10, opacity: 0.3 }} />

                        </List.Section>





                    </View>
                ))
            }


            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#0090ce",

                }}
                large
                icon="account-plus-outline"
                color="#fff"

                onPress={() => navigation.navigate("Search")}
            />

        </View>
    )
}

import React from 'react'
import { View, Text } from 'react-native'
import { Icon, Avatar, Badge } from 'react-native-elements';
import { List, } from 'react-native-paper';
import SearchList from '../components/SearchList';
import SearchBarComponent from '../components/SearchBar';
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


export default function SearchScreen2({ navigation }) {

    return (
        <View style={{ height: "100%", backgroundColor: "#000" }}>
            <SearchBarComponent navigation={navigation} />

            <ScrollView>
                <List.Section>
                    <List.Subheader style={{ marginTop: -10, backgroundColor: "#494949", color: "white", opacity: 0.7 }}>PEOPLE</List.Subheader>

                    {
                        list.map((l, i) => (
                            <SearchList isIcon={false} key={i} status={l.status} name={l.name} tag={l.tag} avatar_url={l.avatar_url} />
                        ))
                    }

                </List.Section>

                <List.Section>
                    <List.Subheader style={{ marginTop: -10, backgroundColor: "#494949", color: "white", opacity: 0.7 }}>CONNECT ON SKYPE</List.Subheader>


                    <SearchList isIcon={true}
                        name="Find contacts easily" tag="Add contacts from your device" iconName="cellphone" />
                    <SearchList isIcon={true}
                        name="Scan QR code" tag="Use your code to connect with others" iconName="qrcode" />
                    <SearchList isIcon={true}
                        name="Invite to Skype" tag="Connect with friends and family" iconName="share" />


                </List.Section>

                <List.Section>
                    <List.Subheader style={{ marginTop: -10, backgroundColor: "#494949", color: "white", opacity: 0.7 }}>MESSAGES</List.Subheader>

                    {
                        list.map((l, i) => (
                            <SearchList isIcon={false} key={i} status={l.status} name={l.name} tag={l.subtitle} avatar_url={l.avatar_url} />
                        ))
                    }

                </List.Section>
            </ScrollView>
        </View>
    )
}

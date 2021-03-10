import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FAB } from 'react-native-paper'
import CallList from '../components/CallList'
import FabBtnNewContact from '../components/FabBtnNewContact'
import HeaderMenu from '../components/HeaderMenu'

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

export default function NewContact({ navigation }) {
    return (
        <View style={{ backgroundColor: 'black', height: "100%" }}>
            <HeaderMenu
                backIcon="keyboard-backspace"
                twoIcons={false}
                inCenter={false}
                isCenterText={true} text="New Contact" callMenu={true}
                notBtn={() => navigation.goBack()}
            />

            <View style={{
                backgroundColor: "#2B2C32", height: 60
                , justifyContent: 'center', alignItems: "center"
            }}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>People, groups & messages</Text>
            </View>

            <ScrollView horizontal contentContainerStyle={{ justifyContent: 'center', alignItems: "center", flexDirection: "row", height: 100 }}>



                <FabBtnNewContact iconLabel="New Group Chat" iconName="account-multiple-plus" />
                <FabBtnNewContact iconLabel="New Call" iconName="phone-plus" />
                <FabBtnNewContact iconLabel="Meet Now" iconName="video-outline" />
                <FabBtnNewContact iconLabel="Private Conversation" iconName="lock-alert" />
                <FabBtnNewContact iconLabel="Invite" iconName="skype-business" />

            </ScrollView>

            <ScrollView style={{ marginTop: -150 }}>

                <CallList sectionHeading="RECENT CALLS" namesList={list} twoIcons={false} />

                <CallList sectionHeading="PEOPLE" namesList={list.slice(0, 2)} />


            </ScrollView>

        </View>
    )
}

import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Divider, Switch } from 'react-native-paper';
import { List } from 'react-native-paper';
import NotificationsSettingList from '../components/NotificationsSettingList';



export default function NavigationSetting() {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);


    return (
        <ScrollView style={{ height: "100%", backgroundColor: "black" }}>

            <NotificationsSettingList heading="PUSH NOTIFICATIONS"
                firstHead="Reactions" secondHead="Notifications sounds" />
            <NotificationsSettingList heading="IN-APP NOTIFICATIONS"
                firstHead="Chat banner notifications" secondHead="Tips & Tricks" />
            <NotificationsSettingList heading="DO NOT DISTURB"
                firstHead="Show chat notifications" secondHead="Show call notifications" />
            <NotificationsSettingList heading="EMAIL NOTIFICATIONS"
                firstHead="Missed chat reminder" secondHead="Missed call reminders" />

        </ScrollView>
    )
}

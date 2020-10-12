import React from 'react'
import { View, Text } from 'react-native'
import { Divider, Switch } from 'react-native-paper';
import { List } from 'react-native-paper';



export default function NotificationsSettingList({ heading, firstHead, secondHead }) {

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);


    return (
        <View >

            <List.Section>
                <List.Subheader style={{ color: "white", opacity: 0.7, fontWeight: "bold" }}>{heading}</List.Subheader>
                <List.Item
                    titleStyle={{ color: 'white', fontSize: 18, marginBottom: 10 }} title={firstHead}
                    right={() => <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />}
                    description="Receive push notifications when someone reacts to your message."
                    descriptionStyle={{ color: "white", opacity: 0.7 }}
                />

                <Divider style={{ opacity: 0.2, backgroundColor: 'white', marginLeft: 10 }} />

                <List.Item
                    titleStyle={{ color: 'white', fontSize: 18, marginBottom: 10 }} title={secondHead}
                    right={() => <Switch value={isSwitchOn2} onValueChange={onToggleSwitch2} />}
                    description="Play sounds for new messages."
                    descriptionStyle={{ color: "white", opacity: 0.7 }}
                />

            </List.Section>

        </View>
    )
}

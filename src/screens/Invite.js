import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements';
import { Card, List } from 'react-native-paper';

export default function Invite() {
    return (
        <View style={{ height: "100%", backgroundColor: "black" }}>
            <Text
                style={{ color: "white", fontSize: 18, margin: 15, opacity: 0.8 }}
            >Connect with anyone by sharing a link to your profile with
                them - even if they are not on Skype.
            </Text>

            <Card style={{ margin: 50, elevation: 2, borderRadius: 20 }}>

                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Title titleStyle={{ fontWeight: "bold" }} title="adam jhonson" />


            </Card>

            <List.Item
                title="Copy to clipboard"
                description="https://join.skype.com/Invite/b5474dg6"
                left={props => <List.Icon {...props} icon="content-copy" color="white" />}
                titleStyle={{ color: "white" }}
                descriptionStyle={{ color: "white", opacity: 0.8 }}
            />
            <Divider style={{ opacity: 0.3, marginLeft: 10, marginRight: 10 }} />

            <List.Item
                title="QR Code"
                description="Scan or display my code"
                left={props => <List.Icon {...props} icon="qrcode" color="white" />}
                titleStyle={{ color: "white" }}
                descriptionStyle={{ color: "white", opacity: 0.8 }}
            />
            <Divider style={{ opacity: 0.3, marginLeft: 10, marginRight: 10 }} />

            <List.Item
                title="More"
                description="Send as SMS, email or through another app"
                left={props => <List.Icon {...props} icon="share" color="white" />}
                titleStyle={{ color: "white" }}
                descriptionStyle={{ color: "white", opacity: 0.8 }}
            />
            <Divider style={{ opacity: 0.3, marginLeft: 10, marginRight: 10 }} />
        </View>
    )
}

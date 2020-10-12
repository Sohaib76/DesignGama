import React from 'react'
import { View, Text } from 'react-native'

export default function Notifications() {
    return (
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "black" }}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 28 }}>No new notifications</Text>
            <Text style={{ marginTop: 5, marginRight: 20, marginLeft: 20, textAlign: "center", color: "white", fontSize: 20, opacity: 0.7 }}>Check back to see new @ mentions, reactions, quotes and much more.</Text>
        </View>
    )
}

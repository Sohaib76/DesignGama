import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FAB } from 'react-native-paper'

export default function FabBtnNewContact({ iconLabel, iconName }) {
    return (
        <View style={{ height: 100, marginTop: 30, marginRight: 18, alignItems: 'center' }}>
            <FAB
                style={{ marginBottom: 10, backgroundColor: '#2B2C32' }}
                large
                icon={iconName}
                onPress={() => console.log('Pressed')}
                color="white"

            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15, width: 90, textAlign: 'center' }}>{iconLabel}</Text>
        </View>
    )
}

import React from 'react'
import { View, Text } from 'react-native'
import { Divider, Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input'


export default function AddNumber() {
    const [text, setText] = React.useState('');

    return (
        <View style={{ height: "100%", backgroundColor: "black", padding: 10 }}>

            <Input
                label="NAME"
                placeholder='First and last name'
                labelStyle={{ fontSize: 15, color: "white", opacity: 0.7 }}
                inputStyle={{ fontSize: 16, color: "grey", marginTop: 10 }}
                inputContainerStyle={{ borderBottomColor: 'rgba(256,256,256,0.1)' }}

            />


            <Text style={{ color: "white", margin: 10, fontWeight: "bold", fontSize: 15, opacity: 0.7 }}>PHONE</Text>
            <PhoneInput useRef='phone'
                style={{ margin: 10 }}
                textStyle={{ color: "white", fontSize: 16 }}
            />

            <Divider style={{ opacity: 0.3, margin: 10 }} />

        </View>
    )
}

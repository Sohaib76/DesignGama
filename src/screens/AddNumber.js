import React from 'react'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';


export default function AddNumber() {
    const [text, setText] = React.useState('');

    return (
        <View style={{ height: "100%", backgroundColor: "black" }}>

            <Input
                label="NAME"
                placeholder='First and last name'
                labelStyle={{ fontSize: 15, color: "white", opacity: 0.7 }}
                inputStyle={{ fontSize: 16, color: "grey", marginTop: 10 }}
                inputContainerStyle={{ borderBottomColor: 'rgba(256,256,256,0.1)' }}

            />
            <Input
                label="PHONE"
                placeholder='First and last name'
                labelStyle={{ fontSize: 15, color: "white", opacity: 0.7 }}
                inputStyle={{ fontSize: 16, color: "grey", marginTop: 10 }}
                inputContainerStyle={{ borderBottomColor: 'rgba(256,256,256,0.1)' }}
                textContentType="telephoneNumber"

            />
        </View>
    )
}

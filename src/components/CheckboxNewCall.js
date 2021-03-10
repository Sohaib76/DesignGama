import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Avatar, Badge, CheckBox, Divider } from 'react-native-elements';


export default function CheckboxNewCall({ pressed, checked }) {
    const [check, setcheck] = useState(false)

    useEffect(() => {

        pressed()
    }, [check])


    function press() {
        alert("af")
    }

    const fin = () => {
        pressed
        alert("ai")

    }

    return (
        <CheckBox
            center


            uncheckedIcon='circle-o'
            checked={check}
            onPress={

                () => { setcheck(!check) }





            }
        />
    )
}

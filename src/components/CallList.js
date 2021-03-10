import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Avatar, Badge, CheckBox, Divider } from 'react-native-elements';
import { List } from 'react-native-paper';
import CheckboxNewCall from './CheckboxNewCall';


export default function CallList({ twoIcons, sectionHeading, namesList }) {

    const [check, setcheck] = useState(false)
    const [checkedOnes, setcheckedOnes] = useState([])
    const [checkedOnesName, setCheckedOnesName] = useState([])
    const [checkedOnesImg, setCheckedOnesImg] = useState([])

    // const checkClick = (l) => {
    //     setcheck(!check)
    // }


    return (
        <List.Section>
            <List.Subheader style={{ fontWeight: "bold", color: "#bababa" }}>{sectionHeading}</List.Subheader>

            {/* {
                checkedOnes[0] && <Text style={{ color: "white" }}>{checkedOnes[0].name}</Text>

            } */}
            {
                namesList.map((l, i) => (


                    <View key={i}>
                        <List.Item titleStyle={{ color: "white", marginLeft: 10 }} title={l.name}
                            description={l.tag}
                            descriptionStyle={{ color: "grey", marginLeft: 10 }}
                            left={() =>
                                <View>
                                    <Avatar rounded size='medium' source={{ uri: l.avatar_url }} />
                                    <Badge
                                        status={l.status}
                                        badgeStyle={{ height: 10, width: 10, borderRadius: 40 }}
                                        containerStyle={{ position: 'absolute', bottom: 4, right: 6 }}
                                    />
                                </View>
                            }
                            right={() => (
                                twoIcons ?
                                    (
                                        <>
                                            <List.Icon color="white" icon="video-outline" />
                                            <List.Icon color="white" icon="phone-outline" />
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <CheckboxNewCall
                                                checked={check}
                                                pressed={
                                                    () => {
                                                        setcheck(!check)

                                                        // check == true ? setcheckedOnes(checkedOnes.concat({ "name": l.name, "avatar": l.avatar_url }))
                                                        //     : (setcheckedOnes(checkedOnes.splice({ "name": l.name, "avatar": l.avatar_url })))

                                                        // alert(checkedOnes[0].name)


                                                    }


                                                    // setcheck(!check)
                                                    // setCheckedOnesName(checkedOnesName.concat(l.name))
                                                    // setCheckedOnesImg(checkedOnesImg.concat(l.avatar_url))




                                                }

                                            />
                                        </>
                                    )

                            )}
                        />
                        <Divider style={{ marginLeft: 50, marginRight: 10, opacity: 0.3 }} />
                    </View>
                ))
            }




        </List.Section>
    )
}

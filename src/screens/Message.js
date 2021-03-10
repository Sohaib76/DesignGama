import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FAB } from 'react-native-paper'
import HeaderMenu from '../components/HeaderMenu'
import { Icon } from 'react-native-elements'
import { Avatar, Input } from 'react-native-elements';

export default function Message({ navigation }) {
    return (
        <View style={{ backgroundColor: "black", height: "100%" }}>
            <HeaderMenu
                backIcon="bell-outline" notBtn={() => navigation.goBack()}
                searchBtn={() => navigation.navigate("Search2")}
                isCenterText={false} leftIcon="magnify" rightIcon="dots-vertical" text="" chatMenu={true} />

            <ScrollView style={{ backgroundColor: "black", height: "70%" }}>


                <View style={{ flexDirection: "row" }}>
                    <View style={{ margin: 18 }}>
                        <Avatar

                            rounded size='medium' source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg" }} />

                    </View>

                    <View style={{ margin: 18, marginLeft: 0 }}>
                        <Text style={{ color: "white" }}>Amy, 9:48 PM</Text>
                        <View style={{
                            backgroundColor: "#1D2223"
                            , width: 250, height: 45, borderRadius: 10, borderTopStartRadius: 0
                            , justifyContent: "center"
                        }}>
                            <Text style={{ color: "white", fontSize: 20, marginLeft: 15 }}>Hi there? How are you.</Text>
                        </View>
                    </View>

                    <Icon
                        style={{ margin: 40, marginLeft: 0 }}
                        name='tag-faces'
                        size={20}
                        color='white'

                    />

                </View>



                <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginRight: 10 }}>

                    <Text style={{ color: "white" }}>9:48 PM</Text>
                    <View style={{
                        backgroundColor: "#2C333C"
                        , width: 250, height: 45, borderRadius: 10, borderBottomEndRadius: 0
                        , justifyContent: "center"
                    }}>
                        <Text style={{ color: "white", fontSize: 20, marginLeft: 15 }}>I hope you are fine.</Text>
                    </View>
                </View>



            </ScrollView>

            <View style={{
                backgroundColor: "black", height: 70, flexDirection: "row",
                marginBottom: 30, alignItems: 'center', margin: 2
            }}>
                <FAB
                    style={{ elevation: 4, height: 40, backgroundColor: "#018FDE", margin: 5 }}
                    small
                    icon="plus"
                    color="white"
                    onPress={() => console.log('Pressed')}
                />

                <Input


                    containerStyle={{
                        backgroundColor: "#222128",
                        borderRadius: 40,
                        height: 55
                        , width: "63%",
                        margin: 5

                    }}
                    inputContainerStyle={{
                        borderBottomWidth: 0,
                        marginTop: 5


                    }}
                    placeholder='Type a message'
                    rightIcon={
                        <Icon
                            name='tag-faces'
                            size={30}
                            color='white'

                        />
                    }
                />

                <Icon
                    name='mic-none'
                    size={38}
                    color='white'
                    type="material"

                />

                <Icon
                    name='camera-outline'
                    size={38}
                    color='white'
                    type="material-community"

                />



            </View>
        </View>
    )
}

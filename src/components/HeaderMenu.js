import React from 'react'
import { View, Text } from 'react-native'
import { Header, Icon, Avatar, Badge, } from 'react-native-elements';
import { Menu, } from 'react-native-paper';


export default function HeaderMenu({ isCenterText, leftIcon, rightIcon, text, chatMenu }) {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (


        <Header
            containerStyle={{
                backgroundColor: '#000',


            }}
            leftComponent={{ size: 30, icon: "bell-outline", color: '#fff', type: "material-community" }}
            centerComponent={
                <View>
                    {
                        isCenterText ? <Text style={{
                            color: 'white', fontSize: 20, fontWeight: 'bold'
                        }}>{text}</Text> : (
                                <>
                                    <Avatar
                                        rounded
                                        source={{
                                            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                                        }}
                                        size="medium"
                                    />

                                    <Badge
                                        status="success"
                                        containerStyle={{ position: 'absolute', bottom: 4, right: 4 }}
                                    />
                                </>
                            )


                    }

                </View>
            }
            rightComponent={
                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name={leftIcon}
                        type='material-community'
                        color='#fff'
                        size={30}
                        style={{ marginRight: 10 }}
                    />

                    {
                        chatMenu ? (
                            <Menu
                                statusBarHeight={93}
                                contentStyle={{ fontWeight: "bold", width: 230, marginLeft: -60 }}
                                visible={visible}
                                onDismiss={closeMenu}
                                anchor={<Icon
                                    name={rightIcon}
                                    type='material-community'
                                    color='#fff'
                                    size={30}
                                    onPress={openMenu}
                                />}>
                                <Menu.Item onPress={() => { }} title="Sort by Recent" />
                                <Menu.Item onPress={() => { }} title="Sort By Unread" />

                                <Menu.Item onPress={() => { }} title="Sort By Active" />
                                <Menu.Item onPress={() => { }} title="Sort By Active" />
                                <Menu.Item onPress={() => { }} title="Hide Favourites" />
                                <Menu.Item onPress={() => { }} title="Enable Compact Layout" />
                            </Menu>

                        )
                            :
                            <Icon
                                name={rightIcon}
                                type='material-community'
                                color='#fff'
                                size={30}
                                onPress={openMenu}
                            />
                    }


                </View>
            }
        />

    )
}

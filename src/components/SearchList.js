import React from 'react'
import { View, Text } from 'react-native'
import { SearchBar, Icon, Avatar, Badge, Divider } from 'react-native-elements';
import { List, } from 'react-native-paper';

export default function SearchList({ name, tag, isIcon, avatar_url, iconName, headerName, status }) {
    return (

        <>
            <List.Item titleStyle={{ color: "white", marginLeft: 10 }} title={name}
                description={tag}
                descriptionStyle={{ color: "grey", marginLeft: 10 }}

                left={

                    isIcon ? (props => <List.Icon {...props} icon={iconName} color="white" />) : (
                        () =>

                            <View>
                                <Avatar rounded size='medium' source={{ uri: avatar_url }} />
                                <Badge
                                    status={status}
                                    badgeStyle={{ height: 10, width: 10, borderRadius: 40 }}
                                    containerStyle={{ position: 'absolute', bottom: 4, right: 6 }}
                                />
                            </View>

                    )




                }

            />
            <Divider style={{ marginLeft: 50, marginRight: 10, opacity: 0.3 }} />
        </>




    )
}

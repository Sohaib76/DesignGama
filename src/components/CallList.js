import React from 'react'
import { View } from 'react-native'
import { Avatar, Badge, Divider } from 'react-native-elements';
import { List } from 'react-native-paper';


export default function CallList({ sectionHeading, namesList }) {

    return (
        <List.Section>
            <List.Subheader style={{ fontWeight: "bold", color: "#bababa" }}>{sectionHeading}</List.Subheader>

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
                                <>
                                    <List.Icon color="white" icon="video-outline" />
                                    <List.Icon color="white" icon="phone-outline" />
                                </>

                            )}
                        />
                        <Divider style={{ marginLeft: 50, marginRight: 10, opacity: 0.3 }} />
                    </View>
                ))
            }




        </List.Section>
    )
}

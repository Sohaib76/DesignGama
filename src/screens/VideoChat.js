import React from 'react'
import { View, Text } from 'react-native'
import { ActivityIndicator } from 'react-native';
import { Image, Button, Icon } from 'react-native-elements';
import { Switch } from 'react-native-paper';


export default function VideoChat() {


    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);

    return (
        <View style={{ height: "100%", backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
            <Image
                source={{ uri: "https://picsum.photos/700" }}
                style={{ width: 200, height: 200, borderRadius: 1000 }}
                PlaceholderContent={<ActivityIndicator />}
            />

            <Button
                title="Share Invite"

                containerStyle={{ backgroundColor: "blue", borderRadius: 20, width: '50%', marginTop: 50 }}
                titleStyle={{ color: "#fff", fontWeight: "bold" }}
            />


            <Button
                icon={
                    <Icon
                        name="video-outline"
                        size={15}
                        color="white"
                        type="material-community"
                    />
                }
                title="Start call"
                type="outline"
                containerStyle={{ borderRadius: 20, width: '50%', marginTop: 20, borderColor: "white", borderWidth: 1 }}
                titleStyle={{ color: "#fff", fontWeight: "bold", marginLeft: 7 }}
            />

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <Icon
                    name="video-off"
                    size={35}
                    color="white"
                    type="feather"
                />
                <Switch style={{ marginLeft: 12, marginRight: 22, marginTop: 5 }} value={isSwitchOn} onValueChange={onToggleSwitch} />
                <Icon
                    name="mic"
                    size={35}
                    color="white"
                    type="feather"
                />
                <Switch style={{ marginLeft: 12, marginTop: 5 }} value={isSwitchOn2} onValueChange={onToggleSwitch2} />

            </View>
        </View>
    )
}

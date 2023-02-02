import React from "react"
import {Alert, Button, View} from "react-native"

function ElButton(){
    const ButtonPressAction = () => {
        Alert.alert('Hicieron clic')
    }
    return (
        <View>
            <Button title = 'Haz clic' onPress = {ButtonPressAction} />
        </View>
    )
}

export default ElButton

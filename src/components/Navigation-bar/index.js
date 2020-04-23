import React from 'react'
import styles from './styles'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function NavigationBar({ toAll, toTop, toNew, toHot, toControversial }) {
    return (
        <View style={styles.top}>
            <TouchableOpacity style={styles.buttonTop} onPress={() => toAll()}>
               <Icon name="reddit" size={35} color="#FE4500"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTop} onPress={() => toTop()}>
                <Text style={styles.text} >Top</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.buttonTop} onPress={() => toNew()}>
                <Text style={styles.text} >New</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.buttonTop} onPress={() => toHot()}>
                <Text style={styles.text} >Hot</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.buttonTop} onPress={() => toControversial()}>
                <Text style={styles.text} >Controversial</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavigationBar
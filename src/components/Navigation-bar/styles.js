import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    top: {
        width: '100%',
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 5,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1.84,
        elevation: 10
    },

    text : {
        fontSize: 17
    },
    
    buttonTop: {
        alignSelf: 'center'
    },

    error : {
        fontSize: 20
    }
})

export default styles
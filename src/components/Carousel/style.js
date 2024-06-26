import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginHorizontal: 10,
        maxHeight: 'auto'
    },
    cardContainer: {
        flexDirection: 'row',
        marginBottom:10
    },
    cardDiv: {
        width: '100%',
        paddingHorizontal: 5
    },
    card: {
        width: 300,
        height: 150,
        backgroundColor: 'black',
        // borderRadius: 10,
        marginHorizontal: 5,
        padding: 15,
        elevation: 4,
        opacity: 0.7,
        borderRadius: 10
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    specialOffers: {
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: '900',
        marginBottom: 0,
        alignContent:'center',
        alignItems:'center',
        color:'#FFFFFFFF'

    },
    text: {
        fontSize: 14,
        marginBottom: 20,
    },
    shopNow: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#347855',
        width: '50%',
        paddingVertical: '3%',
        textAlign: 'center',
        borderRadius: 30
    },
    icon: {
        fontSize: 26,
        color: 'black',
        alignContent: "center"
    },
    spOffers: {
        display: 'flex',
        flexDirection: 'row',
    },
    iconContainer: {
        width: '20%',
        // marginHorizontal: 10,
        marginVertical: 15,
    }
})

export default styles;
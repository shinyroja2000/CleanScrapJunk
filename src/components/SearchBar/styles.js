import { StyleSheet } from "react-native";
// import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d6d6d6',
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        marginTop: 20,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
        fontFamily: 'Montserrat_400Regular'
    },
})

export default styles;
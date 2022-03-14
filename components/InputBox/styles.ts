import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
    },
    mainContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: "flex-end",
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginHorizontal:5,
    }
});

export default styles;
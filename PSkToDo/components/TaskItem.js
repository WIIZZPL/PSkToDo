import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TaskItem(props) {

    function deleteSwipe() {
        return (
            <View style={styles.deleteSwipe}>
                <Ionicons name="trash-outline" size={45} color={"#fff"}/>
            </View>
        )
    }

    return (
        <Swipeable renderLeftActions={() => deleteSwipe()} onSwipeableOpen={() => props.deleteTask(props.item.id)}>
            <View style={styles.listItemCointainer} key={props.item.id}>
                <Text style={styles.listItem}>
                    {props.item.id}:{'\t'}{props.item.name}
                </Text>
                <TouchableOpacity style={styles.checkButton} onPress={() => props.checkFunction(props.item.id)} onLongPress={() => props.uncheckFunction(props.item.id)}>
                    <Ionicons name="checkmark-outline" size={(props.item.done)?45:0}/>
                </TouchableOpacity>
            </View>
        </Swipeable>
    )
}


const styles = StyleSheet.create({
    listItemCointainer: {
        backgroundColor: "#ddd",
        marginTop: 12,
        padding: 20,
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
        alignContent: "center"
    },
    listItem: {
        backgroundColor: "#ddd",
        flex: 1,
        fontSize: 26,
        textAlignVertical: "center",
    },
    checkButton: {
        borderWidth: 2,
        borderRadius: 10,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    deleteSwipe: {
        backgroundColor: '#e23636',
        justifyContent: "center",
        flex: 1,
        marginTop: 12,
        padding: 20
    }
});
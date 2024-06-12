import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TodayView from "../containers/TodayView";
import HabitsView from "../containers/HabitsView";
import CalendarView from "../containers/CalendarView";
import OptionsView from "../containers/OptionsView";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Today"
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    let iconNane;
                    switch (route.name) {
                        case "Calendar":
                            iconNane = "calendar"
                            break;
                        case "Today":
                            iconNane = "albums"
                            break;
                        case "Habits":
                            iconNane = "reload"
                            break;
                        case "Options":
                            iconNane = "cog"
                            break;
                        default:
                            iconNane = "help"
                            break;
                    }
                    if (!focused)
                        iconNane += "-outline";

                    return <Ionicons name={iconNane} size={size} color={color}/>;
                }
            })}>
            <Tab.Screen name="Calendar" component={CalendarView}/>
            <Tab.Screen name="Today" component={TodayView}/>
            <Tab.Screen name="Habits" component={HabitsView}/>
            <Tab.Screen name="Options" component={OptionsView}/>
        </Tab.Navigator>
    )
}
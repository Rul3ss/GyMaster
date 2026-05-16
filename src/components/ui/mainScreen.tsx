import { router } from "expo-router";
import { Settings } from "lucide-react-native";
import { View, Pressable } from "react-native";

export default function MainScreen  (){

    const isDark = 'dark';
    function goTomain(){
        router.push("/settingsPage");
      }
    return (
        <View className={`w-full h-full flex justify-center items-center ${isDark ? 'bg-gray-900' : ''}`}>
            <View className="w-full text-center pt-12 relative">
                <Pressable
                    onPress={goTomain}
                    className={`absolute top-0 right-0 h-10 rounded-full flex items-center justify-center transition-colors ${
                        isDark ? 'bg-gray-800' : 'bg-white'}`}
                >
                    <Settings className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                </Pressable>
            </View>

        </View>
    )
}
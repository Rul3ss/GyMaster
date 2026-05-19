import { LinearGradient } from "expo-linear-gradient";
import { Dumbbell, Settings } from "lucide-react-native";
import { Pressable, View, Text } from "react-native";

type HeaderProps = {
    onSettingsPress: () => void;
}
export function Header({onSettingsPress} : HeaderProps){
    return (
        <View className="w-full items-end">
            <Pressable
            onPress={onSettingsPress}
            className="w-12 h-12 bg-gray-600 rounded-full mb-2 flex justify-center items-center">
                <Settings size={30} color="#D1D5DB"/>
            </Pressable>
            
        <View className="w-full h-36 mt-14 flex justify-center items-center">
            <LinearGradient
            colors={['#a855f7', '#3b82f6']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="w-28 h-28 flex justify-center mb-3 items-center"
            style={{ borderRadius: 9999 }}
>
            <Dumbbell size={40} color="#D1D5DB" />
</LinearGradient>

            <Text className="text-white mb-3 mt-4 text-4xl font-bold">
                GyMaster
                </Text>
            <Text className="text-white mt-2 text-2xl">
                Seu treino, sua rotina
            </Text>
        </View>
        </View>
    )
}
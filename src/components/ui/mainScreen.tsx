import { router } from "expo-router";
import { View } from "react-native";
import { Header } from "../headert1";
import Constants from 'expo-constants'
import Body from "../body";



export default function MainScreen  (){

    const isDark = 'dark';
    
    function goToSetting(){
        router.push("/settingsPage")
    }
    

    const statusBarHeight = Constants.statusBarHeight;

    return (
        <View style ={{flex: 1}}
        className={`${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <View className="w-full px-4" style={{marginTop: statusBarHeight + 30}}>
                <Header
                onSettingsPress={goToSetting}
                />
            <View className="items-center mt-20">
                <Body/>
                </View>
            </View>
        

        </View>
    )
}
import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { router } from "expo-router";
import { Dumbbell } from "lucide-react-native";

export default function SplashScreen() {
  const scale = useRef(new Animated.Value(0.5)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  function goTomain(){
    router.replace("/mainPage");
  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 4,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(rotate, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
          }),
          Animated.timing(rotate, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 2 }
      ),
    ]).start();

    const timer = setTimeout(() => {
      goTomain();
    }, 3500);

    return () => clearTimeout(timer);
  }, [opacity, rotate, scale]);

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["-15deg", "15deg"],
  });

  return (
  <View className="flex-1 items-center justify-center bg-gray-950">
    <View className="items-center">
      <Animated.View
        style={{
          transform: [{ scale }, { rotate: spin }],
          opacity,
        }}
      >
        <Dumbbell size={120} color="white" strokeWidth={2.5} />
      </Animated.View>

      <Animated.Text
        style={{ opacity }}
        className="mt-8 text-3xl font-bold text-white"
      >
        Gym Tracker
      </Animated.Text>
    </View>
  </View>
);
}
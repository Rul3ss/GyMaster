import { View, Text, useWindowDimensions } from 'react-native'

export default function Body() {
  const { width, height } = useWindowDimensions();
  const xSize = width * 0.9; // 50% da largura da tela
  const ySize = height * 0.3;

  return (
    <View style={{
      width: xSize,
      height: ySize,
      backgroundColor: '#1f2937',
      borderRadius: 20,
      marginTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text className="text-white">
        index
        </Text>
    </View>
  )
}
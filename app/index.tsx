import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="gap-4">
      <Text className="rounded-full bg-red-200 p-8">Hello, World! Template!!!</Text>
      <Text className="rounded-full bg-red-200 p-8">One two three!!!</Text>
    </View>
  );
}

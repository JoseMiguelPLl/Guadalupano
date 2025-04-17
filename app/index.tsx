import { Text, View } from "react-native";
import { blue } from "react-native-reanimated/lib/typescript/Colors";
import {useTailwind} from 'tailwind-rn';

export default function Index() {
  const tailwind = useTailwind();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      	<Text style={{backgroundColor:"blue",
           }}>
						Hello Tailwinds
					</Text>
        </View>
  );
}

import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

const ProductCart = ({ image, category, title, price, description }) => {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: 'contain' }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black dark:text-white">{category}</Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>

        <View className="flex-row justify-between my-3">
          <View className="flex-row gap-3 items-center">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === 'dark' ? 'white' : 'black'}
              onPress={() => setCount(count - 1)}
            />
            <Text className="text-xl dark:text-white">{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === 'dark' ? 'white' : 'black'}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            ${price * count}
          </Text>
        </View>
        <Text
          numberOfLines={2}
          className="text-sm text-black/60 dark:text-white/70">
          {description}
        </Text>
        <TouchableOpacity className="flex-row justify-center self-center bg-black w-10/12 dark:bg-white py-3 mt-3 rounded-full">
          <Text className="text-white dark:text-black font-bold">
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCart;

import { View, Text } from 'react-native';
import React from 'react';

type CustomLoadingProps = {
  isLoading: boolean;
};

const CustomLoading = ({ isLoading }: CustomLoadingProps) => {
  return (
    <View>
      <Text>CustomLoading</Text>
    </View>
  );
};

export default CustomLoading;

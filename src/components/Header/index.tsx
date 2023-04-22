import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Header() {
  const opacidade = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacidade.value
    }
  })

  useEffect(() => {
    opacidade.value = withTiming(1, { duration: 2000 });
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Feather
        name="arrow-left"
        color={theme.colors.brown}
        size={32}
      />

      <View>
        <Text style={styles.title}>
          Oriental Food
        </Text>

        <Text style={styles.subtitle}>
          Special Sushi
        </Text>
      </View>
    </Animated.View>
  );
}
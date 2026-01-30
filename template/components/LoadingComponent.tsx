import React, { useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
  Platform,
} from 'react-native';
import { Colors } from '../utils';

// Only import Lottie on native platforms
let LottieView: any = null;
if (Platform.OS !== 'web') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  LottieView = require('lottie-react-native').default;
}

export interface LoadingComponentProps {
  backgroundColor?: string;
  color?: string;
  size?: 'large' | 'small';
  style?: StyleProp<ViewStyle>;
  isNormal?: boolean;
}

const LoadingComponent = (props: LoadingComponentProps) => {
  const backgroundColor = props.backgroundColor || 'white';
  const animationRef = useRef<any>(null);
  const color = props.color || Colors.primary;
  const size = props.size || 'large';
  const style = props.style || {};
  const isNormal = props.isNormal === undefined ? false : props.isNormal;
  const dimensions = useWindowDimensions();

  useEffect(() => {
    if (Platform.OS !== 'web' && animationRef.current) {
      animationRef.current?.play();
      animationRef.current?.play(30, 120);
    }
  }, []);

  return (
    <View style={[styles.screen, style, { backgroundColor }]}>
      {isNormal && <ActivityIndicator color={color} size={size} />}
      {!isNormal && (
        <View
          style={{
            backgroundColor: Colors.textDark,
            width: dimensions.width,
            height: dimensions.height,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          {Platform.OS === 'web' ? (
            <ActivityIndicator color={Colors.primary} size="large" />
          ) : (
            LottieView && (
              <LottieView
                ref={animationRef}
                source={require('../assets/lottie/Loading.json')}
                autoPlay
                style={{ width: 150, height: 150 }}
                speed={1}
                loop
              />
            )
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default LoadingComponent;

import { View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { useEffect } from "react";
import {
  animateRingA,
  animateRingB,
  animateRingC,
  animateRingD,
} from "./LoadingStateProps";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export function LoadingState() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 10000, easing: Easing.linear }),
      -1,
      false,
    );
  }, []);

  const ringAProps = useAnimatedProps(() => animateRingA(progress));
  const ringBProps = useAnimatedProps(() => animateRingB(progress));
  const ringCProps = useAnimatedProps(() => animateRingC(progress));
  const ringDProps = useAnimatedProps(() => animateRingD(progress));
  return (
    <View>
      <Svg width={160} height={160} viewBox="0 0 240 240">
        <AnimatedCircle
          cx={120}
          cy={120}
          r={105}
          fill="none"
          stroke="#0A3625"
          strokeWidth={20}
          strokeDasharray={[0, 660]}
          strokeDashoffset={-330}
          strokeLinecap="round"
          animatedProps={ringAProps}
        />
        <AnimatedCircle
          cx={120}
          cy={120}
          r={35}
          fill="none"
          stroke="#DDE86A"
          strokeWidth={20}
          strokeDasharray={[0, 220]}
          strokeDashoffset={-110}
          strokeLinecap="round"
          animatedProps={ringBProps}
        />
        <AnimatedCircle
          cx={85}
          cy={120}
          r={70}
          fill="none"
          stroke="#16a34a"
          strokeWidth={20}
          strokeDasharray={[0, 440]}
          strokeLinecap="round"
          animatedProps={ringCProps}
        />
        <AnimatedCircle
          cx={155}
          cy={120}
          r={70}
          fill="none"
          stroke="#E8EAD0"
          strokeWidth={20}
          strokeDasharray={[0, 440]}
          strokeLinecap="round"
          animatedProps={ringDProps}
        />
      </Svg>
    </View>
  );
}

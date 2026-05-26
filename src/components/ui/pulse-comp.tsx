import { useEffect } from "react";
import { Animated, TouchableOpacity, StyleSheet, View } from "react-native";

export default function PulseComponent({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  const pulseAnim = new Animated.Value(1);

  const styles = getPulseStyle(color);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Animated.View
        style={[
          styles.button,
          {
            transform: [{ scale: pulseAnim }],
          },
        ]}
      >
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
}

function getPulseStyle(color: string) {
  return StyleSheet.create({
    buttonContainer: {
      padding: 10,
    },
    button: {
      width: 10,
      height: 10,
      backgroundColor: color,
      borderRadius: 50,
    },
  });
}

import { Text, TextProps } from "react-native";

export function PText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "OriginalSurfer-Regular",
        },
        props.style,
      ]}
    />
  );
}
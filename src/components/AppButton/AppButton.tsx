import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';

export type AppButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void | undefined;
  buttonStyles?: StyleProp<ViewStyle> | undefined;
  textStyles?: StyleProp<TextStyle> | undefined;
};

export const AppButton = ({
  onPress,
  title,
  buttonStyles,
  textStyles,
}: AppButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[styles.appButtonContainer, buttonStyles]}>
    <Text style={[styles.appButtonText, textStyles]}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  appButtonText: {
    fontSize: 18,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

import React from "react";
import { View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

export function DrawerContent(props) {
  const paperTheme = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      /* {...other - content} */
      <Drawer.Section title="Preferences">
        <TouchableRipple onPress={props.toggleTheme}>
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={theme.dark} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

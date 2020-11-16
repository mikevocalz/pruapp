import * as React from 'react';
import { TouchableOpacity, Platform, Dimensions, Alert, Text, View} from "react-native";
import { Appbar, Avatar, Button, Paragraph, Dialog, Portal } from "react-native-paper";
import { SvgUri, SvgCssUri } from "react-native-svg";
import { isMobile, isMobileOnly } from "react-device-detect";
import { DrawerActions } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Logo from '../components/logo';

export interface AppProps { 
  
}undefined;

const avatar =
  "https://res.cloudinary.com/teepublic/image/private/s--rjC8-HuL--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1555971626/production/designs/4695625_0.jpg";
const { width, height } = Dimensions.get('window')
const breakpoint =  420;
const isMobileSz =  width <= breakpoint;
      


const CustomHeader = ({ scene, previous, navigation }: any) => {
  const { options } = scene.descriptor;
  
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;


  return (
    <Appbar.Header style={{ backgroundColor: "red", marginHorizontal: 10 }}>
      {previous && <Appbar.BackAction onPress={navigation.pop} color={"red"} />}
      {!isMobileSz && (
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
      )}

      <Appbar.Content
        titleStyle={{
          textAlign: Platform.OS === "web" ? "left" : "center",
        }}
        title={
          previous ? (
            title
          ) : (
            // <Text>TEXT</Text>
            <Logo width={260} height={180} />
          )
        }
      />
      {!isMobileSz && (
        <Appbar.Content
          style={{
            position: "absolute",
            justifyContent: "center",
            right: 0,
          }}
          title={
            <TouchableOpacity onPress={() => {}}>
              <Avatar.Image
                size={40}
                style={{
                  borderColor: "black",
                }}
                source={{
                  uri: avatar,
                }}
              />
            </TouchableOpacity>
          }
        />
      )}
    </Appbar.Header>
  );
};


export default CustomHeader;
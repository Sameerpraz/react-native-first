// // This file is a fallback for using MaterialIcons on Android and web.

// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import { SymbolWeight } from "expo-symbols";
// import React from "react";
// import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";
// // import Ionicons from '@expo/vector-icons/Ionicons';

// // Add your SFSymbol to MaterialIcons mappings here.
// const MAPPING = {
//   // See MaterialIcons here: https://icons.expo.fyi
//   // See SF Symbols in the SF Symbols app on Mac.
//   "house.fill": "home",
//   "paperplane.fill": "send",
//   "delete.fill": "delete",
//   "contact.fill": "contact-page",
//   "people.circle": "people-circle-outline",
//   "chevron.left.forwardslash.chevron.right": "code",
//   "chevron.right": "chevron-right",
// } as Partial<
//   Record<
//     import("expo-symbols").SymbolViewProps["name"],
//     React.ComponentProps<typeof MaterialIcons>["name"]
//   >
// >;

// export type IconSymbolName = keyof typeof MAPPING;

// /**
//  * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
//  *
//  * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
//  */
// export function IconSymbol({
//   name,
//   size = 24,
//   color,
//   style,
// }: {
//   name: IconSymbolName;
//   size?: number;
//   color: string | OpaqueColorValue;
//   style?: StyleProp<ViewStyle>;
//   weight?: SymbolWeight;
// }) {
//   return (
//     <MaterialIcons
//       color={color}
//       size={size}
//       name={MAPPING[name]}
//       style={style}
//     />
//   );
// }

import Ionicons from "@expo/vector-icons/Ionicons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

export function TabBarIcon({
  style,
  ...rest
}: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

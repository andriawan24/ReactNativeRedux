import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Text } from "react-native";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    if (Text.defaultProps == null) Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }, []);

  return (
    <Home />
  );
}

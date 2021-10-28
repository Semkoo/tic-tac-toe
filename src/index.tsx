import React, { ReactElement } from "react";
import { StyleSheet } from "react-native";

import { AppBootstrap } from "@components";
import Navigator from "@config/navigator";
// import { Home, Game } from "@screens";

export default function App(): ReactElement {
    return (
        <AppBootstrap>
            <Navigator />
        </AppBootstrap>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

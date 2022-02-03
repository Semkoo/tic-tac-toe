import React, { ReactElement, ReactNode } from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

type GradientBackground = {
    children: ReactNode;
};

export default function GradientBackground({ children }: GradientBackground): ReactElement {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <LinearGradient
                // Background Linear Gradient
                colors={["#120318", "#221a36"]}
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            />
            {children}
        </View>
    );
}

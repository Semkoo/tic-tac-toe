import React from "react";
import { ScrollView, View, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams } from "@config/navigator";
import { GradientBackground, Button } from "@components";

import styles from "./Home.styles";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams>;
};

export default function home({ navigation }: HomeProps) {
    return (
        <GradientBackground>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={require("@assets/logo.png")} />
                <View style={styles.buttons}>
                    <Button
                        onPress={() => {
                            navigation.navigate("SinglePlayerGame", { gameId: "1" });
                        }}
                        style={styles.button}
                        title="SinglePlayerGame"
                    />
                    {/* <Button
                        onPress={() => {
                            navigation.navigate("SinglePlayerGame");
                        }}
                        style={styles.button}
                        title="Multiplayer"
                    />
                    <Button
                        onPress={() => {
                            navigation.navigate("SinglePlayerGame");
                        }}
                        style={styles.button}
                        title="Login"
                    />
                    <Button
                        onPress={() => {
                            navigation.navigate("SinglePlayerGame");
                        }}
                        style={styles.button}
                        title="Settings"
                    /> */}
                </View>
            </ScrollView>
        </GradientBackground>
    );
}

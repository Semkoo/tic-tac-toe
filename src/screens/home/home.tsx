import React from "react";
import { Text, Button, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { StackNavigatorParams } from "@config/navigator";
import styles from "./home.styles";

type HomeProps = {
    navigation: StackNavigationProp<StackNavigatorParams>;
};

export default function home({ navigation }: HomeProps) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Home</Text>
            <Button title="Game" onPress={() => navigation.navigate("Game", { gameId: "123" })} />
        </ScrollView>
    );
}

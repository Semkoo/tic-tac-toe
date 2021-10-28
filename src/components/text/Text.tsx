import React, { ReactNode, ReactElement } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type TextProps = {
    weight: "400" | "700";
    children: ReactNode;
} & NativeTextProps;

const defaultProps = {
    weight: "700"
};

export default function Text({ children, style, weight, ...props }: TextProps): ReactElement {
    const fontFamily = weight === "700" ? "DeliusUnicase_700Bold" : "DeliusUnicase_400Regular";

    return (
        <NativeText {...props} style={[{ fontFamily }, style]}>
            {children}
        </NativeText>
    );
}

Text.defaultProps = defaultProps;

import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";

interface IKeyboardAvoidng {
    children: React.ReactNode
}

export const KeyboardAvoiding = (props: IKeyboardAvoidng) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={{ flex: 1, alignSelf: 'stretch' }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                {props.children}
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Login.style';
import { CustomTextInput, Header, Logo, CustomButton } from '../../../components';
import { useSelector } from 'react-redux';
import { IRootState, store } from '../../../store';
import { clickLoginButton, clickSignUp } from './Login.action';




export const Login = () => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.LOGIN_SCREEN);
    const [state, setState] = useState<ILoginState>({
        username: '',
        password: '',
    })
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.LoginResponse.loading);

    return (
        <View style={styles.container}>
            <Header title={language.HEADER} />
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.form}>
                <CustomTextInput value={state.username} onChangeText={(text) => setState({ ...state, username: text })} placeholder={language.EMAIL} />
                <CustomTextInput value={state.password} onChangeText={(text) => setState({ ...state, password: text })} secureTextEntry placeholder={language.PASSWORD} />
                <CustomButton name={language.HEADER} loading={loading} onPress={() => clickLoginButton(state.username, state.password)} />
            </View>
            <View style={styles.flexFill} />
            <View style={styles.footer}>
                <Text style={styles.text}> {language.NO_ACCOUNT}    
                    <Text onPress={clickSignUp} style={styles.buttonText}> {language.REGISTER} </Text> 
                </Text>
            </View>
        </View>
    );
}

interface ILoginState{
    username: string,
    password: string
}


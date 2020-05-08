import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './Login.style';
import { CustomTextInput, Header, Logo, CustomButton, KeyboardAvoiding } from '../../../components';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { clickLoginButton, clickSignUp } from './Login.action';




export const Login = () => {
    const [state, setState] = useState<ILoginState>({
        email: '',
        password: '',
    });

    let language = useSelector<IRootState, any>((r_state: IRootState) => r_state.AppLanguageResponse.currentLanguage);
    language = language.LOGIN_SCREEN;
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.LoginResponse.loading);
    
    return (
        <View style={styles.container}>
            <Header title={language.HEADER} />
            <ScrollView>
            <KeyboardAvoiding>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <View style={styles.form}>
                    <CustomTextInput value={state.email} onChangeText={(text) => setState({ ...state, email: text })} placeholder={language.EMAIL} />
                    <CustomTextInput value={state.password} onChangeText={(text) => setState({ ...state, password: text })} secureTextEntry placeholder={language.PASSWORD} />
                    <CustomButton name={language.HEADER} loading={loading} onPress={() => clickLoginButton(state.email, state.password)} />
                </View>
            </KeyboardAvoiding>
            </ScrollView>
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
    email: string,
    password: string
}


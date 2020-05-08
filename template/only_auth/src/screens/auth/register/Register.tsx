import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from './Register.style';
import { CustomTextInput, Header, Logo, CustomButton, KeyboardAvoiding } from '../../../components';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { clickRegisterButton } from './Register.action';




export const Register = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })
    let language = useSelector<IRootState, any>((r_state: IRootState) => r_state.AppLanguageResponse.currentLanguage);
    language = language.REGISTER_SCREEN;
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.RegisterResponse.loading);
    return (
        <View style={styles.container}>
            <Header back title={language.HEADER} />
            <ScrollView>
            <KeyboardAvoiding>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.form}>
                <CustomTextInput value={state.email} onChangeText={(text) => setState({ ...state, email: text })} placeholder={language.EMAIL} />
                <CustomTextInput value={state.password} onChangeText={(text) => setState({ ...state, password: text })} secureTextEntry placeholder={language.PASSWORD} />
                <CustomTextInput value={state.passwordConfirm} onChangeText={(text) => setState({ ...state, passwordConfirm: text })} secureTextEntry placeholder={language.CONFIRM_PASSWORD} />
                <CustomButton name={language.HEADER} loading={loading} onPress={() => clickRegisterButton(state.email, state.password, state.passwordConfirm)} />
            </View>
            </KeyboardAvoiding>
            </ScrollView>
        </View>
    );

}


import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Register.style';
import { CustomTextInput, Header, Logo, CustomButton } from '../../../components';
import { useSelector } from 'react-redux';
import { IRootState, store } from '../../../store';
import { clickRegisterButton } from './Register.action';




export const Register = () => {
    const [language, setLanguage] = useState(store.getState().AppLanguageResponse.currentLanguage.REGISTER_SCREEN);
    const [state, setState] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
    })
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.RegisterResponse.loading);
    return (
        <View style={styles.container}>
            <Header back title={language.HEADER} />
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.form}>
                <CustomTextInput value={state.username} onChangeText={(text) => setState({ ...state, username: text })} placeholder={language.EMAIL} />
                <CustomTextInput value={state.password} onChangeText={(text) => setState({ ...state, password: text })} secureTextEntry placeholder={language.PASSWORD} />
                <CustomTextInput value={state.passwordConfirm} onChangeText={(text) => setState({ ...state, passwordConfirm: text })} secureTextEntry placeholder={language.CONFIRM_PASSWORD} />
                <CustomButton name={language.HEADER} loading={loading} onPress={() => clickRegisterButton(state.username, state.password, state.passwordConfirm)} />
            </View>
        </View>
    );

}


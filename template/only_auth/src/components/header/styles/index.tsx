import {styles as styles_android} from './Header.style.android';
import {styles as styles_ios} from './Header.style.ios';
import { Platform } from 'react-native';

export const styles = Platform.OS === 'android' ? styles_android : styles_ios;
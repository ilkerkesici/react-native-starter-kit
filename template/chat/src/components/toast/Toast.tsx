import React  from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import { saveRef, onCancel, onTop, onClose } from './Toast.action';
import { IRootState } from '../../store';
import { useSelector } from 'react-redux';

export const Toast = () => {
    let showCancel = useSelector<IRootState, any>((r_state: IRootState) => r_state.ToastResponse.showCancel);
    return(
        <DropdownAlert
          ref={ref => saveRef(ref)}
          containerStyle={{
            backgroundColor: 'black',
          }}
          showCancel={showCancel}
          onCancel={onCancel}
          onTap={onTop}
          titleNumOfLines={1}
          messageNumOfLines={2}
          onClose={onClose}
        />
    );
}

import { AuthActionTypes } from '../consts';
import Axios from 'axios';

const { LODING_AUTH, LOG_IN, LOG_OUT, ERROR_AUTH } = AuthActionTypes;

export const logout = (dispatch) => dispatch({ type: LOG_OUT });

export const login = (googleToken) => (dispatch) => {
    // dispatch({ type: LODING_AUTH });
    // Axios
    //     .post()
    //     .then((res) => {

    //     })
    //     .catch((err) => {
    //         dispatch({
    //             type: ERROR_AUTH
    //         });
    //     })
    dispatch({type: LOG_IN, payload: googleToken});
};
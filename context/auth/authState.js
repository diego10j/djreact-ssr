import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';


import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    USUARIO_AUTENTICADO,
    CERRAR_SESION
} from '../../types';

import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';
import { useMensaje } from '../../core/hooks/useMensaje';

const AuthState = ({ children }) => {

    // Definir un state inicial
    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: null
    }

    //permite agregar mensajes 
    const agregarMensaje = useMensaje();

    // Definir el reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Registrar nuevos usuarios
    const registrarUsuario = async datos => {

        try {
            const respuesta = await clienteAxios.post('/api/usuario/registrar', datos);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data.msg
            });
        } catch (error) {
            agregarMensaje.error(error.response.data.mensaje);
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.mensaje
            })
        }
    }

    // Autenticar Usuarios
    const iniciarSesion = async datos => {

        try {
            datos.ip='127.0.0.1';
            datos.dispositivo='react';
            const respuesta = await clienteAxios.post('/api/seguridad/login', datos);
            localStorage.setItem('avatar', respuesta.data.datos.avatar);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data.token
            })
        } catch (error) {
            agregarMensaje.error(error.response.data.mensaje);
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.mensaje
            })
            
        }


    }

    // Retorne el Usuario autenticado en base al JWT
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token)
        }

        try {
            const respuesta = await clienteAxios.get('/api/seguridad/renew');
            if (respuesta.data.usuario) {
                dispatch({
                    type: USUARIO_AUTENTICADO,
                    payload: respuesta.data.usuario
                })
            }

        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }

    // Cerrar la sesión
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >
            {children}
        </authContext.Provider>
    )
}

export default AuthState;
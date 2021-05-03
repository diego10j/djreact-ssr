import React, { useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Auth from '../../layouts/Auth';
import authContext from '../../context/auth/authContext';
//componentes
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
//iconos
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import styles from '../../styles/Login.module.css'
export default function Login() {



  // definir el context
  const AuthContext = useContext(authContext);
  const { autenticado, iniciarSesion } = AuthContext;

  // Next router
  const router = useRouter();

  useEffect(() => {
    if (autenticado) {
      router.push('/private/dashboard');
    }
  }, [autenticado]);


  const [showPassword, setShowPassword] = React.useState(false);

  // Formulario y validación con formik y Yup
  const formik = useFormik({
    initialValues: {
      identificacion: '',
      clave: ''
    },
    validationSchema: Yup.object({
      identificacion: Yup.string()
        .required('El Usuario es obligatorio'),
      clave: Yup.string()
        .required('La Contraseña es obligatoria')
    }),
    onSubmit: valores => {
      iniciarSesion(valores)
    }
  });

  //Permite visualizar la contraseña
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (

    <div className={styles.contenedor}>
      <section className={styles.side}>
        <img src="/svg/login.svg" alt=""/>
      </section>
      <section className={styles.main}>
        <div className={styles.loginContainer}>
          <p className={styles.title}>Iniciar Sesión</p>
          <div className={styles.separator}></div>
          <form
            className={styles.loginForm}
            onSubmit={formik.handleSubmit}
          >
            <div>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="identificacion"
                label="Usuario"
                name="identificacion"
                autoComplete="identificacion"
                autoFocus
                value={formik.values.identificacion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.identificacion && formik.errors.identificacion ? (
                <div >
                  <p >Error</p>
                  <p>{formik.errors.identificacion} </p>
                </div>
              ) : null}
            </div>

            <div >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="clave"
                label="Contraseña"
                type={showPassword ? 'text' : 'password'}
                id="clave"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {!showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <div >
                  <p >Error</p>
                  <p>{formik.errors.password} </p>
                </div>
              ) : null}
            </div>
            <div >
              <Button type="submit" color="primary" fullWidth 
              sx={{ mt: 3, mb: 2 }}
              variant="contained">
                Iniciar Sesión
            </Button>
            </div>

          </form>
        </div>
      </section>

    </div>
  );
}

Login.layout = Auth;



import { useSnackbar } from 'notistack';

export const useMensaje = () => {

    const { enqueueSnackbar } = useSnackbar();

    const defecto = (mensaje) => {
        configurarMensaje(mensaje);
    }

    const exito = (mensaje) => {
        configurarMensaje(mensaje, 'success');
    }

    const error = (mensaje) => {
        configurarMensaje(mensaje, 'error');
    }

    const info = (mensaje) => {
        configurarMensaje(mensaje, 'info');
    }

    const advertencia = (mensaje) => {
        configurarMensaje(mensaje, 'warning');
    }

    const configurarMensaje = (mensaje, variant = 'default') => {
        enqueueSnackbar(mensaje, {
            variant: variant,
            autoHideDuration: 2000,
            preventDuplicate: true,
        });
    }

    return { defecto, exito, error, info, advertencia };

}
import Swal from 'sweetalert2';

export default class Utilitario {

    /**
     * Agrega un mensaje de Información en la pantalla
     * @param {*} mensaje 
     * @param {*} titulo 
     */
    static agregarMensajeInfo(mensaje, titulo = null) {
        if (!this.isDefined(titulo)) {
            titulo = 'Información';
        }
        Swal.fire({
            icon: 'info',
            title: titulo,
            html: mensaje,
            confirmButtonText: 'Ok',
            heightAuto: false,
        });
    }

    /**
     * Agrega un mensaje de Error en la pantalla
     * @param {*} mensaje 
     * @param {*} titulo 
     */
    static agregarMensajeError(mensaje, titulo = null) {
        if (!this.isDefined(titulo)) {
            titulo = 'Error';
        }
        Swal.fire({
            icon: 'error',
            title: titulo,
            html: mensaje,
            confirmButtonText: 'Ok',
            heightAuto: false,
        });
    }


    /**
    * Agrega un mensaje de Advertencia en la pantalla
    * @param {*} mensaje 
    * @param {*} titulo 
    */
    static agregarMensajeAdvertencia(mensaje, titulo = null) {
        if (!this.isDefined(titulo)) {
            titulo = 'Advertencia';
        }
        Swal.fire({
            icon: 'warning',
            title: titulo,
            html: mensaje,
            confirmButtonText: 'Ok',
            heightAuto: false,
        });
    }

    /**
     * Agrega un mensaje de Exito en la pantalla
     * @param {*} mensaje 
     * @param {*} titulo 
     */
    static agregarMensajeExito(mensaje, titulo = null) {
        if (!this.isDefined(titulo)) {
            titulo = 'Éxito';
        }
        Swal.fire({
            icon: 'success',
            title: titulo,
            text: mensaje,
            confirmButtonText: 'Ok',
            heightAuto: false,
        });
    }

    /**
     * Agrega un mensaje de confirmación en la pantalla
     * @param {*} mensaje 
     * @param {*} titulo 
     */
    static confirmar(mensaje, callback, titulo = null) {
        if (!this.isDefined(titulo)) {

        }
        Swal.fire({
            title: titulo,
            icon: 'question',
            html: mensaje,
            showCancelButton: true,
            focusConfirm: false,
            reverseButtons: true,
            confirmButtonText:
                '<span class="ion-padding-horizontal"></span> Si <span class="ion-padding-horizontal"></span> ',
            confirmButtonAriaLabel: 'Si',
            cancelButtonText:
                '<span class="ion-padding-horizontal"></span>  No <span class="ion-padding-horizontal"></span> ',
            cancelButtonAriaLabel: 'No',
            heightAuto: false,
        }).then((result) => {
            if (result.isConfirmed) {
                callback();
            }
        });
    }

    /**
     * Retorna si una variable esta definida
     * @param {*} variable 
     * @returns 
     */
    static isDefined(variable) {
        return typeof variable !== 'undefined' && variable !== null;
    }


}

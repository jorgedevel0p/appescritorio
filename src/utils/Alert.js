// Documentación acá: https://sweetalert2.github.io/#examples

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const AlertInfo = ({ title, icon, text }) => {
  MySwal.fire({
    icon: icon,
    title: title,
    text: text,
  })
}

export const AlertConfirm = ({
  title = 'Desea realizar la operación?',       // valores por defecto (si no se pasa nada por parametros, entonces tomará estos valores)
  icon = 'warning',
  text = 'Estás seguro que deseas continuar?',
  btnOkText = 'Aceptar',

  doneTitle = 'Ejecución exitosa',
  doneText = 'Tu operación se realizó ok',
  doneIcon = 'success',
  fnToExecute,  // "funcionAEjecutar = se debe pasar una función para que sea ejecutada una vez que el usuario acepte... (se conocen cómo -callback-)"
}) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: btnOkText,
    showLoaderOnConfirm: true,
    preConfirm: () => {
      return fnToExecute()
        .then(response => response)
        .catch(error => error)
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {

    if (result.value.ok) {
      AlertInfo({ title: doneTitle, icon: doneIcon , text: doneText})
    }else{
      AlertInfo({ title: 'Error', icon: 'error' , text: result.value.data })
    }

  })
}

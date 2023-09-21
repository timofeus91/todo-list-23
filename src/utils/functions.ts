import { toast, ToastContent } from 'react-toastify';

export const notifyError = (errorMessage: ToastContent) =>
  toast.error(errorMessage, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: errorMessage as string,
  });

export const notifySuccess = (errorMessage: ToastContent) =>
  toast.success(errorMessage, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const notifyWarning = (errorMessage: ToastContent) =>
  toast.warning(errorMessage, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

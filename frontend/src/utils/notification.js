import { toast } from 'react-toastify';

export const notifySuccess = (msg) => toast.success(msg || 'success');
export const notifyError = (msg) => toast.error(msg || 'An error occured');

import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/toast.css";

export default function Toast({ message, type, theme }) {
  return toast(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
    type: type,
    transition: Slide,
    closeOnClick: true,
    pauseOnHover: false,
    theme: theme,
  });
}

import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import useEscapeKey from "../../hooks/useEscapeKey";

const Modal = ({ isOpen, onClose, children, width = "" }) => {

    useEscapeKey(onClose)



    if (!isOpen) return null;
    const modalStyles = `bg-white p-6 rounded shadow-lg z-10 relative w-full md:w-[500px] ${width}`;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-2">
            <div className="fixed inset-0 bg-black opacity-50"> </div>
            <div className={modalStyles}>
                <button
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 "
                    onClick={onClose}
                >
                    <CloseIcon />
                </button>
                {children}

            </div>
        </div>
    );
};


export default Modal

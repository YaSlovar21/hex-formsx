import React, { FC, PropsWithChildren, ReactElement } from 'react';
import ReactDOM from 'react-dom'

import styles from './Modal.module.css';


import { ESC_CODE } from '../../utils/constants';

import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseOutlined } from '@mui/icons-material';

const modalRoot = document.getElementById('react-modals');



const Modal = ({children, onEventCloseInModal}) => {

    React.useEffect(() =>{
        const closeByEsc = (evt) => {
            if (evt.key === ESC_CODE) {
                onEventCloseInModal();
            }
        }
        document.addEventListener('keydown', closeByEsc);
        return () => 
            document.removeEventListener('keydown', closeByEsc);
    }, []);

    return ReactDOM.createPortal(
        <div className={`${styles.modalwrapper}`}>
            <ModalOverlay onOverlayClick={onEventCloseInModal}  />
            <div className={styles.modal}>
                <button className={styles.closebutton} onClick={onEventCloseInModal}>
                    Закрыть
                    <CloseOutlined />
                </button>
                {children}
            </div>
        </div>
        , modalRoot
    )
}

export default Modal;

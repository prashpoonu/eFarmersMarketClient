import React from 'react';
import '../Assets/Styles/Modal.css'
const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper" style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>

                <div className="modal-header">
                    <h3>Sign Up For eFarmersMarket</h3>
                    <span className="close-modal-btn" onClick={props.close}>x</span>
                </div>

                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-signup">Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default modal;
import React from 'react';
import SignUpModal from './SignupModalComponent';
class SignUpComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            isShowing:false
        }
    }

    openModalHandler=()=>{
        this.setState({
            isShowing:true
        })
    }
    closeModalHandler=()=>{
        this.setState({
            isShowing:false
        })
    }
    render() {
        return (
            <div>
                {/* { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null } */}
           <button className="btnSignup" onClick={this.openModalHandler}>Sign Up</button>
            <SignUpModal 
            className="modal" show={this.state.isShowing}
            close={this.closeModalHandler}>
           </SignUpModal>
            </div>
        );
    }
}
export default SignUpComponent;
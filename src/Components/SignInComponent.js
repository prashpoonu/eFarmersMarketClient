import React from 'react';
import SignInModal from './SigninModalComponent';
class SignInComponent extends React.Component {
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
           <button className="btnSignIn" onClick={this.openModalHandler}>Log In</button>
            <SignInModal 
            className="modal" show={this.state.isShowing}
            close={this.closeModalHandler}>
            </SignInModal>
            </div>
        );
    }
}
export default SignInComponent;
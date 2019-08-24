import React from 'react'
import useForm from 'react-hook-form'
function FormSignIn(){
const {register,handleSubmit} = useForm()
const onSubmit = data=>{
    //send data to the server to validate the logged in user

}
return(
<form onSubmit={handleSubmit(onSubmit)}>
    
    <label name="uName" ref={register}>User Name :</label>
    <input name="UserName" ref={register}></input>
    <label name="psw" ref={register}>Password :</label>
    <input name="Password" ref={register}></input>
    <button name="SignIn" type="submit">Log In</button>
</form>
);
}

export default FormSignIn
import React from 'react'
import useForm from 'react-hook-form'
function FormSignIn(){
const {register,handleSubmit} = useForm()
const onSubmit = data=>{console.log(data)}
return(
<form onSubmit={handleSubmit(onSubmit)}>
    
    <label name="uName" ref={register}>User Name :</label>
    <input name="UserName" ref={register}></input>
    <label name="psw" ref={register}>Password :</label>
    <input name="Password" ref={register}></input>
    <button name="SignIn" type="submit">Sign In</button>
</form>
);
}

export default FormSignIn
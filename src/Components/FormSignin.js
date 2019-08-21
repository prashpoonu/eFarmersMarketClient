import React from 'react'
import useForm from 'react-hook-form'
function FormSignUp(){
const {register,handleSubmit} = useForm()
const onSubmit = data=>{console.log(data)}
return(
<form onSubmit={handleSubmit(onSubmit)}>
    
    <label name="uName" ref={register}>User Name :</label>
    <input name="UserName" ref={register}></input>
    <label name="psw" ref={register}>Password :</label>
    <button name="SignUp" type="submit">Sign Up</button>
</form>
);
}

export default FormSignUp
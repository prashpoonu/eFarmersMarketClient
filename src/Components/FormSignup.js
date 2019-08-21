import React from 'react'
import useForm from 'react-hook-form'
function FormSignUp(){
const {register,handleSubmit} = useForm()
const onSubmit = data=>{console.log(data)}
return(
<form onSubmit={handleSubmit(onSubmit)}>
    <label name="fName" ref={register}>First Name :</label>
    <input name="FirstName" ref={register}></input>
    <label name="lName" ref={register}>Last Name :</label>
    <input name="LastName" ref={register}></input>
    <label name="email" ref={register}>Email: :</label>
    <input name="EmailAddr" ref={register}></input>
    <label name="uName" ref={register}>User Name :</label>
    <input name="UserName" ref={register}></input>
    <label name="psw" ref={register}>Password :</label>
    <input name="Password" ref={register}></input>
    <label name="uCategory" ref={register}>User Category :</label>
    <input name="UserCategory" ref={register}></input>
    <button name="SignUp" type="submit">Sign Up</button>
</form>
);
}

export default FormSignUp
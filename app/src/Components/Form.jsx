import React from 'react'
import Email from './Email'
import Password from './Password'
const Form = () => {


  //All  STATES

  const [userEmail, setUserEmail] = React.useState("")
  const [userPassword, setUserPassword] = React.useState("")
  const [userConfirmPassword, setUserConfrimPassword] = React.useState("")
  const [passwordLengthCheck, setPasswordLengthCheck] = React.useState(".")
  const [passwordCheckSmallCase, setPasswordCheckSmallCase] = React.useState(".")
  const [passwordCheckCapitalCase, setPasswordCheckCapitalCase] = React.useState(".")
  const [passwordCheckNumber, setPasswordCheckNumber] = React.useState(".")
  const [passwordCheckSpecialCharacter, setPasswordCheckSpecialCharacter] = React.useState(".")


//Form submit functionality

  const Submit = () => {
   
    if (userPassword.length >= 8) {
      if (userPassword !== userConfirmPassword) {
        alert("Both passwords should be matched")
      }
      else{
        alert("Account created successfully")
      }
    }


  }












  return (

    <div className='formContainer'>
      
    
    <form onSubmit={e => { e.preventDefault() }} >


      <Email/>


  {/* All Passord Props */}
      <Password
        status={userPassword} setStatus={setUserPassword}

        confirmStatus={userConfirmPassword} setConfirmStatus={setUserConfrimPassword}

        setPasswordLengthCheck={setPasswordLengthCheck}
        setPasswordCheckSmallCase={setPasswordCheckSmallCase}
        setPasswordCheckCapitalCase={setPasswordCheckCapitalCase}
        setPasswordCheckNumber={setPasswordCheckNumber}
        setPasswordCheckSpecialCharacter={setPasswordCheckSpecialCharacter}
      />


<h3>Your password must contain</h3>

      <h3> {passwordLengthCheck} Atleast 8 characters</h3>

      <h3> {passwordCheckSmallCase} A lower case letter</h3>

      <h3> {passwordCheckCapitalCase} An upper case letter</h3>
      <h3> {passwordCheckSpecialCharacter} A special character</h3>
      <h3> {passwordCheckNumber} A number</h3>

      <button type='submit' onClick={() => Submit()}> Create account</button>




    </form>
    </div>

  )
}
export default Form
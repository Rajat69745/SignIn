import React from 'react'

const Password = ({  setStatus, setConfirmStatus, setPasswordLengthCheck, setPasswordCheckSmallCase, setPasswordCheckCapitalCase, setPasswordCheckNumber, setPasswordCheckSpecialCharacter }) => {

  const Password = (e) => {

    setStatus(e)

    if (e.length < 8) {
      setPasswordLengthCheck(".")
    }
    else {
      setPasswordLengthCheck("✓")
    }
    if (e.includes('a') || e.includes('b') || e.includes('c') || e.includes('d') || e.includes('e') || e.includes('f') || e.includes('g') || e.includes('h') || e.includes('i') || e.includes('j') || e.includes('k') || e.includes('l') || e.includes('m') || e.includes('n') || e.includes('o') || e.includes('p') || e.includes('q') || e.includes('r') || e.includes('s') || e.includes('t') || e.includes('u') || e.includes('v') || e.includes('w') || e.includes('x') || e.includes('y') || e.includes('z')) {
      setPasswordCheckSmallCase("✓")
    }
    else {
      setPasswordCheckSmallCase(".")
    }


    if (e.includes('A') || e.includes('B') || e.includes('C') || e.includes('D') || e.includes('E') || e.includes('F') || e.includes('G') || e.includes('H') || e.includes('I') || e.includes('J') || e.includes('K') || e.includes('L') || e.includes('M') || e.includes('N') || e.includes('O') || e.includes('P') || e.includes('Q') || e.includes('R') || e.includes('S') || e.includes('T') || e.includes('U') || e.includes('V') || e.includes('W') || e.includes('X') || e.includes('Y') || e.includes('Z')) {
      setPasswordCheckCapitalCase("✓")
    }
    else {
      setPasswordCheckCapitalCase(".")
    }

    if (e.includes(0) || e.includes(1) || e.includes(2) || e.includes(3) || e.includes(4) || e.includes(5) || e.includes(6) || e.includes(7) || e.includes(8) || e.includes(9)) {
      setPasswordCheckNumber("✓")
    } else { setPasswordCheckNumber(".") }


    if(e.includes('.')||e.includes(',')||e.includes('/')||e.includes('?')||e.includes(';')||e.includes(':')||e.includes(" ' ")||e.includes('" ')||e.includes('[')|| e.includes(']')|| e.includes('!')|| e.includes('@')|| e.includes('#')|| e.includes('$')|| e.includes('%')|| e.includes('^')|| e.includes(')')|| e.includes('(')|| e.includes('*')|| e.includes('=')|| e.includes('+')|| e.includes('-')|| e.includes('_')|| e.includes('~')|| e.includes('`') ){
setPasswordCheckSpecialCharacter("✓")
    }
    else{
      setPasswordCheckSpecialCharacter(".")
    }

  }

  const ConfirmPassword = (e) => {
    setConfirmStatus(e)
  }
  

  return (

    <>


<h3>New Password</h3>
      <input  placeholder='Choose a secure password' onInput={(e) => Password(e.target.value)} />
      <h3>Re-enter New Password</h3>
      <input  placeholder='Choose a secure password' onInput={(e) => ConfirmPassword(e.target.value)} />

    </>
  )
}

export default Password
import { useState } from 'react';
import Emailcopy from './Emailcopy';
import Gmailcopylogin from './GmailCopyLogin';
import Comsection from './Comsection.js';

function App() {
  return (
    <Comsection/>
  );
  // const [islogin, setislogin] = useState(false);

  // function userloggedin (){
  //   setislogin(true);
  // }
  // function userloggedout (){
  //   setislogin(false);
  // }
  // if (islogin == true) {
  //   return (
  //     <Emailcopy loggedout={userloggedout} />
  //   );
  // } else {
  //   return (
  //     <Gmailcopylogin loginfunction={userloggedin}/>
  //   );
  // }

}

export default App;

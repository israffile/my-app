
import { useState } from 'react';
import './Gmailcopylogin.css';

const USER_EMAILS = [
    'ogamoga@globel.go',
    'vondomiya@globel.go',
];

const USER_PASSWORDS = [
    'ogamoga1234',
    'vondo1234',
];

function GmailCopyLogin ({loginfunction}) {

    const [email, setemail] = useState('');

    function emailinputcng  (inputevent) {
        // var newemail = inputevent.target.value; //way no1
        // setemail(newemail); //way no1

        inputevent = inputevent.target.value; //way no2
        setemail(inputevent); //way no2

    }

    const [passwordv, newpassword] = useState('');

    function pinputcng (passwordshow) {
        newpassword(passwordshow.target.value);
    }
    function signinbtn () {
        for (var i = 0; i < USER_EMAILS.length; i++) {
            var e = USER_EMAILS[i];
            var p = USER_PASSWORDS[i];
            
            if (e == email && p == passwordv) {
                console.log("succsess");
                loginfunction();
            } else {
                console.log("failed");
            }
        }
    }
    return (
        <div className="wholedis">
            <div className="loginfather">
                <div className="mainlogin">
                    <div className="cologo"><svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="100" height="100"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"/></svg>
</div>
                    <div className="signin">sign in</div>
                    <div className="detailssi">to continue globel</div>
                    <div className='emailclass' type='email'>email/phone</div>
                    <input className="email" value={email} onChange={emailinputcng} />
                    <br/>
                    <div className='passwordclass'>enter password</div>
                    <input className="password" value={passwordv} onChange={pinputcng} type='password' />
                    <div className="forgotemail">forgot email</div>
                    <div className="communitysd">ulalalaeoewocidcnvnefvefvuevneuivnev iufveiruvni vuernfei weieuccie kence3kjcne</div>
                    <div className="lmore">learn more</div>
                    <div className='blank'></div>
                    <div className="ppcan">
                        <div className="createac">creat account</div>
                        <div className='blank'></div>
                        <button className="signinn" onClick={signinbtn}>sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GmailCopyLogin;
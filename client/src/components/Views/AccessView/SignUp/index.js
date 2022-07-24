import { useState, useRef } from 'react';
import { fullnameRe, nicknameRe, passwordRe, emailRe } from './validators.js';
import { Input } from '../../../Input';
import './SignUp.css';

export const SignUp = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('do some submitting stuff');
  };

  return (
    <form className="SignUp" onSubmit={handleSubmit}>
      <Input
        label="Fullname"
        name="FullnameInput"
        rule={fullnameRe}
        ruleMessages={["must use alphabetical characters only"]}
        value={fullname}
        autoFocus={true}
        events={{
          onChange: (change) => setFullname(change)
        }}
      />
      <Input
        label="Nickname"
        name="NicknameInput"
        rule={nicknameRe}
        ruleMessages={[
          "must use alphanumerical characters, _ and . only",
          "first character must be an alphanumerical character or _"
        ]}
        value={nickname}
        events={{
          onChange: (change) => setNickname(change)
        }}
      />
      <Input
        label="Password"
        name="PasswordInput"
        type="password"
        rule={passwordRe}
        ruleMessages={[
          "must be 8 characters long",
          "must contain a symbol, an uppercase letter, a lowercase letter and a number"
        ]}
        value={password}
        events={{
          onChange: (change) => setPassword(change)
        }}
      />
      <Input
        label="Email"
        name="EmailInput"
        type="email"
        rule={emailRe}
        ruleMessages={["must be a valid email"]}
        value={email}
        events={{
          onChange: (change) => setEmail(change)
        }}
      />
      <button type="submit" className="SignUp_create_button">create</button>
    </form>
  );
};

import { Input } from '../../../Input';
import { useState } from 'react';
import './LogIn.css';

export const LogIn = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('do some submitting stuff');
  }

  return (
    <form className="LogIn" onSubmit={handleSubmit}>
      <Input
        label="Nickname"
        name="NicknameInputLogIn"
        value={nickname}
        autoFocus={true}
        events={{
          onChange: (change) => setNickname(change)
        }}
      />
      <Input
        label="Password"
        name="PasswordInputLogIn"
        type="password"
        value={password}
        events={{
          onChange: (change) => setPassword(change)
        }}
      />
      <button type="submit" className="LogIn_create_button">log in</button>
    </form>
  )
}

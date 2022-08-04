import './LogIn.css';
import { useState, useRef } from 'react';
import { useClient } from "../../../../providers/ClientProvider";
import { mock_users } from '../../../../mockdata/users';
import { Input } from '../../../Input';
import { Loader } from '../../../Loader';

const mockUserLogIn = (users, user) => {
  let match = false;
  users.forEach((u) => {
    if (
      u.nickname === user.nickname &&
      u.password === user.password
    ) { match = true; }
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(match);
    }, 2000);
  });
};

export const LogIn = () => {
  const [user, setUser] = useState({
    nickname: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const { logIn } = useClient(); 

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    const submitButton = event.target.elements['LogIn__submit_button'];
    submitButton.disabled = true;

    mockUserLogIn(mock_users, user)
    .then((validation) => {
      if (validation) {
        logIn();
      }
      else {
        formRef.current && formRef.current.classList.add('--invalid-login');
      }
      setLoading(false);
      submitButton.disabled = false;
    });
  };

  return (
    <form ref={formRef} className='LogIn' onSubmit={handleSubmit}>
      <Input
        label='Nickname'
        name='NicknameInputLogIn'
        value={user.nickname}
        autoFocus={true}
        events={{
          onChange: (change) => {
            setUser((prev) => ({
              ...prev,
              nickname: change
            }));
            formRef.current && formRef.current.classList.remove('--invalid-login');
          }
        }}
      />
      <Input
        label='Password'
        name='PasswordInputLogIn'
        type='password'
        value={user.password}
        events={{
          onChange: (change) => {
            setUser((prev) => ({
              ...prev,
              password: change
            }));
            formRef.current && formRef.current.classList.remove('--invalid-login');
          }
        }}
      />
        {
          loading
            ? <Loader />
            : (
              <button
                type='submit'
                className='LogIn__submit_button'
                name='LogIn__submit_button'
              >
                  log in
              </button>
            )
        }
    </form>
  )
}

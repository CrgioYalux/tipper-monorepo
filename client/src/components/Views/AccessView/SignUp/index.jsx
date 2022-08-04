import { useState, useRef } from 'react';
import { fullnameRe, nicknameRe, passwordRe, emailRe } from './validators.js';
import { Input } from '../../../Input';
import { Loader } from '../../../Loader';
import './SignUp.css';

const mockUserSignUp = (user) => {
  let match = false;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(match);
    }, 2000);
  });
};

export const SignUp = () => {
  const [user, setUser] = useState({
    nickname: '',
    password: '',
    fullname: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);
    const submitButton = event.target.elements['SignUp__submit_button'];
    submitButton.disabled = true;

    mockUserSignUp(user)
    .then((res) => {
      if (res) {
        // signUp();
      }
      else {
        formRef.current && formRef.current.classList.add('--invalid-signup');
      }
      setLoading(false);
      submitButton.disabled = false;
    });
  };

  return (
    <form ref={formRef} className="SignUp" onSubmit={handleSubmit}>
      <Input
        label="Fullname"
        name="FullnameInputSignUp"
        rule={fullnameRe}
        ruleMessages={["must use alphabetical characters only"]}
        value={user.fullname}
        autoFocus={true}
        events={{
          onChange: (change) => {
            setUser((prev) => ({
              ...prev,
              fullname: change
            }));
            formRef.current && formRef.current.classList.remove('--invalid-signup');
          }
        }}
      />
      <Input
        label="Nickname"
        name="NicknameInputSignUp"
        rule={nicknameRe}
        ruleMessages={[
          "must use alphanumerical characters, _ and . only",
          "first character must be an alphanumerical character or _"
        ]}
        value={user.nickname}
        events={{
          onChange: (change) => {
            setUser((prev) => ({
              ...prev,
              nickname: change
            }));
            formRef.current && formRef.current.classList.remove('--invalid-signup');
          }
        }}
      />
      <Input
        label="Password"
        name="PasswordInputSignUp"
        type="password"
        rule={passwordRe}
        ruleMessages={[
          "must be 8 characters long",
          "must contain a symbol, an uppercase letter, a lowercase letter and a number"
        ]}
        value={user.password}
        events={{
          onChange: (change) => {
            setUser((prev) => ({
              ...prev,
              password: change
            }));
            formRef.current && formRef.current.classList.remove('--invalid-signup');
          }
        }}
      />
      <Input
        label="Email"
        name="EmailInputSignUp"
        type="email"
        rule={emailRe}
        ruleMessages={["must be a valid email"]}
        value={user.email}
        events={{
          onChange: (change) => {
            setUser((prev) => ({
              ...prev,
              email: change
            }));
            formRef.current && formRef.current.classList.remove('--invalid-signup');
          }
        }}
      />
      {
        loading
          ? <Loader />
          : (
            <button
              type='submit'
              className='SignUp__submit_button'
              name='SignUp__submit_button'
            >
                sign up
            </button>
          )
      }
    </form>
  );
};

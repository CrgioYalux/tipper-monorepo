import './AddTipForm.css';
import { useState, useCallback } from 'react';
import { TIP_MAX_LENGTH } from './validators';
import { Input } from '../Input';
import { ExitIcon } from '../Icons/ExitIcon';
import { TipIcon } from '../Icons/TipIcon';

export const AddTipForm = (props) => {
  const {
    events = {},
    className = ""
  } = props;

  const {
    onDidSubmit = () => {},
    onCancelAction = () => {}
  } = events;

  const [tip, setTip] = useState('');
  const [validityClassName, setValidityClassName] = useState('');

  const handleInputValidity = useCallback((inputElement) => {
    if (inputElement.value.length !== 0) {
      const isValid = inputElement.value.length <= TIP_MAX_LENGTH;
      if (isValid) {
        setValidityClassName('--valid-input');
        inputElement.setCustomValidity('');
      }
      else {
        setValidityClassName('--invalid-input');
        inputElement.setCustomValidity(`Max ${TIP_MAX_LENGTH} characters`);
      }
    } else setValidityClassName('');
  }, []);

  const handleChange = (event) => {
    setTip(event.target.value);
    handleInputValidity(event.target);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDidSubmit();
  };

	return (
		<form 
      onSubmit={handleSubmit}
      className={`AddTipForm ${validityClassName} ${className}`}
    >
      <button
        type='button'
        onClick={onCancelAction}
        className='AddTipForm_cancel_bt'
      >
       <ExitIcon className='AddTipForm_cancel_icon'/>
      </button>
      <textarea
        name='TipInput'
        className='AddTipForm_input'
        value={tip}
        onChange={handleChange}
        autoFocus={true}
        required={true}
      />
      <strong
        className='AddTipForm_word_counter'
      >
        {tip.length}/{TIP_MAX_LENGTH}
      </strong>
      <button
        type='submit'
        className='AddTipForm_submit_bt'
        disabled={tip.length > TIP_MAX_LENGTH}
      >
        <TipIcon className='AddTipForm_submit_icon'/>
      </button>
		</form>
	);
};

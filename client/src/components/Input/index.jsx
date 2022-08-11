import './Input.css';
import { useState, useCallback } from 'react';

export const Input = (props) => {
  const {
    value,
    rule,
    ruleMessages = [],
    events = {},
    classes = {},
    label = "",
    placeholder = "",
    type = "text",
    name = "InputText",
    autoFocus = false,
    required = true,
    noLabel = false 
  } = props;

  const {
    onChange = () => {}
  } = events;

  const {
    containerClassName = "",
    labelClassName = "",
    inputClassName = "",
    errorMessageClassName = "",
    ruleMessagesClassName = "",
    ruleMessageClassName = ""
  } = classes;

  const [validityClassName, setValidityClassName] = useState('');

  const handleInputValidity = useCallback(
    (inputElement, invalidInputMsg = "Invalid input") => {
      if (inputElement.value.length !== 0 && !!rule) {
        const isValid = rule.test(inputElement.value);
        if (isValid) {
          setValidityClassName('--valid-input');
          inputElement.setCustomValidity('');
        }
        else {
          setValidityClassName('--invalid-input');
          inputElement.setCustomValidity(invalidInputMsg);
        }
      } else setValidityClassName('');
    },
    [rule]
  );

  const handleChange = (event) => {
    onChange(event.target.value);
    handleInputValidity(event.target);
  };

  return (
    <label className={`Input__default_class ${containerClassName} ${validityClassName}`} htmlFor={name}>
      <div>
        {!noLabel && <span className={`Input_label__default_class ${labelClassName} ${validityClassName}`}>{label}</span>}
        <input
          className={`Input_field__default_class ${inputClassName} ${validityClassName}`}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          autoFocus={autoFocus}
          required={required}
        />
      </div>
      {
        (ruleMessages.length != 0) && (
          <ul className={`Input_rule_messages__default_class ${ruleMessagesClassName} ${validityClassName}`}>
            {ruleMessages.map((msg, key) => (
              <li
                key={key}
                className={`Input_rule_message__default_class ${ruleMessageClassName} ${validityClassName}`}
              >
               *<b>{msg}</b>
              </li>
            ))}
          </ul> 
        )
      }
    </label>
  );
};

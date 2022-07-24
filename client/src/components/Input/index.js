import { useState, useEffect, useMemo } from 'react';
import './Input.css';

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
    required = true
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

  const handleInputValidity = (rule, inputElement, invalidInputMsg = "Invalid input") => {
    if (inputElement.value !== '' && !!rule) {
      const isValid = rule.test(inputElement.value);
      if (isValid) {
        setValidityClassName('--valid-input');
        inputElement.setCustomValidity("");
      }
      else {
        setValidityClassName('--invalid-input');
        inputElement.setCustomValidity(invalidInputMsg);
      }
    }
    else setValidityClassName();
  }

  const handleChange = (event) => {
    const change = event.target.value;
    onChange(change);

    handleInputValidity(rule, event.target);
  }

  return (
    <label className={`Input__default_class ${containerClassName} ${validityClassName}`} htmlFor={name}>
      <div>
        <span className={`Input_label__default_class ${labelClassName} ${validityClassName}`}>{label}</span>
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

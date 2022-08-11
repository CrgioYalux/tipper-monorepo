import './AddTipWidget.css';
import { useState } from 'react';
import { AddIcon } from '../../Icons/AddIcon';
import { AddTipForm } from '../../AddTipForm';

export const AddTipWidget = (props) => {
  const {
    className = "",
    using = false,
    startUsing = () => {},
    endUsing = () => {}
  } = props;

  return using 
    ? <AddTipForm
        className={className}
        events={{
          onDidSubmit: () => {
            endUsing();
          },
          onCancelAction: (event) => {
            event?.preventDefault()
            endUsing();
          }
        }}
      /> 
    : (
      <button
        className={`AddTipWidget ${className}`}
        onClick={(event) => {
          event.preventDefault();
          startUsing();
        }}
      >
        <AddIcon className='AddTipWidget_icon'/>
      </button>
    );
};

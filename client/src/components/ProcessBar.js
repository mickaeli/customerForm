import React from 'react';

import './ProcessBar.css'

const ProcessBar = ({currStep, steps, language}) => {
  return (
    <div className='process-bar'>
      <div className={'box ' + (currStep === steps.personal ? 'active' : '')}>
         {language === 'en' ? 'personal' : 'personnel'}
      </div>
      <span className='bar'></span>
      <div className={'box ' + (currStep === steps.address ? 'active' : '')}>
      {language === 'en' ? 'address' : 'adresse'}
      </div>
      <span className='bar'></span>
      <div className={'box ' + (currStep === steps.contactability ? 'active' : '')}>
      {language === 'en' ? 'contactability' : 'contact'}
      </div>
    </div>
  );
};

export default ProcessBar;
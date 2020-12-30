import React from 'react';

import './SwitchLanguage.css'

const switchLanguage = ({language, toEn, toFr}) => {
  return (
    <div className='buttons-language'>
      <button 
      className='lang-btn'
      style={{marginRight: '1rem', backgroundColor: language === 'fr' ? '#6aaeff' : 'white' }}
      onClick={toFr}>
        FR
      </button>
      <button 
      className='lang-btn' 
      style={{backgroundColor: language === 'en' ? '#6aaeff' : 'white' }}
      onClick={toEn}>
        EN
      </button>
    </div>
  );
};

export default switchLanguage;
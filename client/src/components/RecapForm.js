import React from 'react';

import './RecapForm.css'

const RecapForm = ({customer, language}) => {
  return (
    <div className='recap-form'>
      <h1>
        {language === 'en' ? 'Dear ' : 'Cher '} 
        {customer.firstname} 
        {language === 'en' ? ', here are your personal details:' : ', voici vos details personnels'}
      </h1>
      {
        Object.keys(customer).map(key => 
          <p key={key}>{key}: {customer[key]}</p>
        )
      }
    </div>
  );
};

export default RecapForm;
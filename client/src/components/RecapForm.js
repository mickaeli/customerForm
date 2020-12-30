import React from 'react';

import './RecapForm.css'

const RecapForm = ({customer, language}) => {
  return (
    <div className='recap-form'>
      <h1>
        {language === 'en' ? 'Congratulations ' : 'Felicitation '} 
        {customer.firstname} 
        {language === 'en' ? ', here are your personal details:' : ', voici vos details personnels'}
      </h1>
      {
        Object.keys(customer).map(key => {
          if(key !== 'optin') {
            return (<p key={key}>{key}: {customer[key]}</p>)
          }
          //for key 'optin' that is a boolean
          return <p key={key}>{key}: {customer[key] ? 'true' : 'false'}</p>
        })
      }
    </div>
  );
};

export default RecapForm;
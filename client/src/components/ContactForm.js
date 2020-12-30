import React from 'react';

import './Form.css';

const ContactForm = ({email, phone, optin, handleChange, errors, onBack, onSubmit, language}) => {
  return (
    <form className='form flex-col' onSubmit={onSubmit}>
      <div className='form-element flex-col'>
        <label className='label'>email</label>
        <input type="text" name='email' value={email} onChange={handleChange}/>
        <p className='error'>{errors.email !== undefined ? language === 'en' ? errors.email.en : errors.email.fr : ''}</p>
      </div>
      <div className='form-element flex-col'>
        <label className='label'>{language === 'en' ? 'phone' : 'telephone'}</label>
        <input type="text" name='phone' value={phone} onChange={handleChange}/>
        <p className='error'>{errors.phone !== undefined ? language === 'en' ? errors.phone.en : errors.phone.fr : ''}</p>
      </div>
      <div className='form-element checkbox-optin'>
        <input type="checkbox" id="optin" name="optin" defaultChecked={optin} onChange={handleChange}/>
        <label className='label' htmlFor="optin">{language === 'en' ? 'by checking this box, you will accept to receive emails for us' : 'en cochant cette case, vous acceptez de recevoir des mails de notre part'}</label>
      </div>
      <div className="formButtons">
        <button className="form-btn" style={{marginRight: '1rem'}} onClick={onBack}>{language === 'en' ? 'Back' : 'Prec.'}</button>
        <button className="form-btn" type="submit">{language === 'en' ? 'Submit' : 'Soumettre'}</button>
      </div>
    </form>
  );
};

export default ContactForm;
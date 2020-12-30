import React from 'react';

import './Form.css';

const PersonalForm = ({firstname, lastname, gender, handleChange, errors, onNext, language}) => {
  return (
    <form className='form flex-col' onSubmit={onNext}>
      <div className='form-element flex-col'>
        <label className='label'>{language === 'en' ? 'firstname' : 'prenom'}</label>
        <input type="text" name='firstname' value={firstname} onChange={handleChange}/>
        <p className='error'>{errors.firstname !== undefined ? language === 'en' ? errors.firstname.en : errors.firstname.fr : ''}</p>
      </div>
      <div className='form-element flex-col'>
        <label className='label'>{language === 'en' ? 'lastname' : 'nom'}</label>
        <input type="text" name='lastname' value={lastname} onChange={handleChange}/>
        <p className='error'>{errors.lastname !== undefined ? language === 'en' ? errors.lastname.en : errors.lastname.fr : ''}</p>
      </div>
      <div className='form-element radio-buttons'>
        <div className='radio-buttons-label'>
          {language === 'en' ? 'gender' : 'sexe'}
        </div>
        <div>
          <input id='rb-male' type="radio" name='gender' value='Male' checked={gender === 'Male'} onChange={handleChange}/>
          <label htmlFor='rb-male' className='label'>{language === 'en' ? 'Male' : 'Homme'}</label>
        </div>
        <div>
          <input id='rb-female' type="radio" name='gender' value='Female' checked={gender === 'Female'} onChange={handleChange}/>
          <label htmlFor='rb-female' className='label'>{language === 'en' ? 'Female' : 'Femme'}</label>
        </div>
      </div>
      <button className="form-btn" type="submit">{language === 'en' ? 'Next' : 'Suivant'}</button>
    </form>
  );
};

export default PersonalForm;
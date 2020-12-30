import React from 'react';

import './Form.css';

const AddressForm = ({country, city, street, countries, handleChange, errors, onBack, onNext, language}) => {
  return (
    <form className='form flex-col' onSubmit={onNext}>
      <div className='form-element flex-col'>
        <label className='label'>{language === 'en' ? 'country' : 'pays'} </label>
        <select className = 'countries' name="country" value={country} onChange={handleChange}>
          <option>{language === 'en' ? '-- select an option --' : '-- choisissez une option'} </option>
          {
            countries.map(country => <option key={country}  value={country}>{country}</option>)
          }
        </select>
        <p className='error'>{errors.country !== undefined ? language === 'en' ? errors.country.en : errors.country.fr : ''}</p>
      </div>
      
      <div className='form-element flex-col'>
        <label className='label'>{language === 'en' ? 'city' : 'ville'}</label>
        <input type="text" name='city' value={city} onChange={handleChange}/>
      </div>
      <div className='form-element flex-col'>
        <label className='label'>{language === 'en' ? 'street' : 'rue'}</label>
        <input type="text" name='street' value={street} onChange={handleChange}/>
      </div>
      <div className="formButtons">
        <button className="form-btn" style={{marginRight: '1rem'}} onClick={onBack}>{language === 'en' ? 'Back' : 'Prec.'}</button>
        <button className="form-btn" type="submit">{language === 'en' ? 'Next' : 'Suivant'}</button>
      </div>
    </form>
  );
};

export default AddressForm;
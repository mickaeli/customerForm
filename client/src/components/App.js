import React, { Component } from 'react';

import './App.css'

import SwitchLanguage from './SwitchLanguage'
import ProcessBar from './ProcessBar'
import PersonalForm from './PersonalForm'
import AddressForm from './AddressForm';
import ContactForm from './ContactForm';
import RecapForm from './RecapForm';

import { validatePersonalForm, validateAddressForm, validateContactForm } from '../validate';

const STEPS = {
  personal: 0,
  address: 1,
  contactability: 2
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      language: 'fr',
      currStep: STEPS.personal,
      customer: {
        firstname: 'mickael',
        lastname: '',
        gender: '',
        country: '',
        city: '',
        street: '',
        email: '',
        phone: '',
        optin: true
      },
      countries: ['France', 'Israel'],
      errors: {},
      isValidForm: true,
      showModal: false
    }
  }

  handleChange = event => {
    const field = event.target.name;
    let customer = this.state.customer;
    
    customer[field] = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({customer});
  }

  onNext = event => {
    event.preventDefault();
    let payload;

    switch(this.state.currStep) {
      case STEPS.personal: 
        payload = validatePersonalForm(this.state.customer);
        break;
      case STEPS.address: 
        payload = validateAddressForm(this.state.customer);
        break;
        default:
          break;
    }

    if (payload.success) {
      this.setState({
        errors: {},
        currStep: this.state.currStep+1
      });
      
    } else {
      this.setState({
        errors : payload.errors
      });
    }
  }

  onBack = event => {
    event.preventDefault();
    this.setState({currStep: this.state.currStep-1});
  }

  onSubmit = event =>  {
    event.preventDefault();
    const payload = validateContactForm(this.state.customer);

    if (payload.success) {
      this.setState({
        errors: {},
        validForm: true
      });
      
    } else {
      this.setState({
        errors : payload.errors
      });
    }
  }

  toFr = () => { this.setState({language: 'fr'}) };
  toEn = () => { this.setState({language: 'en'}) };

  render() {

    let stepForm;

    switch (this.state.currStep) {
      case STEPS.personal:
        stepForm = (
          <PersonalForm 
              key='PersonalForm'
              firstname={this.state.customer.firstname} 
              lastname={this.state.customer.lastname} 
              gender={this.state.customer.gender} 
              handleChange={this.handleChange}
              errors={this.state.errors}
              onNext={this.onNext}
              language={this.state.language}
            />
          )
        break;
      case STEPS.address:
        stepForm = (<AddressForm
              key='AddressForm'
              country={this.state.customer.country} 
              city={this.state.customer.city} 
              street={this.state.customer.street} 
              countries={this.state.countries}
              handleChange={this.handleChange}
              errors={this.state.errors}
              onBack={this.onBack}
              onNext={this.onNext}
              language={this.state.language}
            />
          )
        break;
      case STEPS.contactability:
        stepForm = (
          <ContactForm
              key='ContactForm'
              email={this.state.customer.email} 
              phone={this.state.customer.phone} 
              optin={this.state.customer.optin} 
              handleChange={this.handleChange}
              errors={this.state.errors}
              onBack={this.onBack}
              onSubmit={this.onSubmit}
              language={this.state.language}
            />
          )
        break;
    
      default:
        break;
    }

    return (
      <div className ='form-container'>
        <SwitchLanguage language={this.state.language} toFr={this.toFr} toEn={this.toEn}/>
        {
          !this.state.isValidForm ?
          [
            <ProcessBar key='ProcessBar' currStep={this.state.currStep} steps={STEPS} language={this.state.language}/>,
            stepForm
          ] :
          <RecapForm customer={this.state.customer} language={this.state.language} />
        }
      </div>
    );
  }
}

export default App;
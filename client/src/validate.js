export const validatePersonalForm = payload => {

  let isFormValid = true;
  const errors = {};

  if (payload.firstname.trim().length === 0) {
    isFormValid = false;
    errors.firstname = {
      en: "Please provide your firstname",
      fr: "Veuillez renseigner votre prenom"
    };
  }

  if (payload.lastname.trim().length === 0) {
    isFormValid = false;
    errors.lastname = {
      en: "Please provide your lastname",
      fr: "Veuillez renseigner votre nom"
    };
  }

  return {
    success: isFormValid,
    errors
  };
}


export const validateAddressForm = payload => {

  let isFormValid = true;
  const errors = {};

  if (payload.country.trim().length === 0) {
    isFormValid = false;
    errors.country = {
      en: "Please provide your country",
      fr: "Veuillez renseigner votre pays"
    };
  }

  return {
    success: isFormValid,
    errors
  };
}

export const validateContactForm = payload => {
  
  let isFormValid = true;
  const errors = {};
  const email = payload.email.trim();
  const phone = payload.phone.trim();

  if(email.length === 0 || !validateEmail(email)) {
    isFormValid = false;
    errors.email = {
      en: "Please provide a correct email",
      fr: "Veuillez inserer une adresse mail valide"
    };
  }

  if(phone !== '' && !validatePhone(phone)) {
    isFormValid = false;
    errors.phone = {
      en: "Please provide a correct phone number",
      fr: "Veuillez inserer un num. de telephone valide"
    };
  }

  return {
    success: isFormValid,
    errors
  };
}

/* 
There are many criteria that need to be follow to validate the email id such as:
1) email id must contain the @ and . character
2) There must be at least one character before and after the @.
3) There must be at least two characters after . (dot). 
*/
function validateEmail(email) {

  const atPosition = email.indexOf("@");
  const dotPosition = email.lastIndexOf(".");

  if (atPosition < 1 || dotPosition < atPosition+2 || dotPosition+2 >= email.length){
    return false;  
  }

  return true;
}

/* 
validate israeli phone number(include cellular)
*/
function validatePhone(phone) {
  const regex = /^0(5[^1679]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/;

  return regex.test(phone);
}
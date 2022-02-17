function telephoneCheck(str) {
    const regexPhoneNumber = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/; 
    
      return regexPhoneNumber.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
  telephoneCheck("555-555-5555");
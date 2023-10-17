document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('btn1');
    const resetButton = document.getElementById('btn2');
  
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      validateForm();
    });
  
    resetButton.addEventListener('click', function() {
      document.querySelector('form').reset();
    });
  
    function validateForm() {
      const firstName = document.querySelector('input[placeholder="Enter your First Name"]');
      const lastName = document.querySelector('input[placeholder="Enter your Last Name"]');
      const email = document.querySelector('input[placeholder="Enter your Email"]');
      const dob = document.querySelector('input[placeholder="Enter your Birth Date"]');
      const profession = document.querySelector('input[placeholder="Enter your Profession"]');
      const mobileNumber = document.querySelector('input[placeholder="Enter your Mobile Number"]');
      const gender = document.querySelector('input[name="gender"]:checked');
  
      if (!firstName.value || !lastName.value || !email.value || !dob.value || !profession.value || !mobileNumber.value || !gender) {
        alert('Please fill in all the required fields.');
      } else {
        alert('Form submitted successfully!');
      }
    }
  });
  
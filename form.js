    function myFunction() {
   
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var username = document.getElementById("username").value;
        var bday = document.getElementById("bday").value;
        var email = document.getElementById("email").value;
        var check = document.getElementById("check").checked;
        
        var today = new Date().getFullYear();
        var birthYear = new Date(bday).getFullYear();
        var difference = today - birthYear;
        if (difference < 18) {
           alert("Young Boi, no.")
        }
    }
    
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
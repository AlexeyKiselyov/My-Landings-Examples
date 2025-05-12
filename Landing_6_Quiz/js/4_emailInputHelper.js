var emailInput = document.getElementById('email');
var emailSuggestions = document.getElementById('emailSuggestions');

emailInput.addEventListener('input', function (event) {
  var inputValue = event.target.value;
  var atSymbolIndex = inputValue.indexOf('@');

  // Clean up the offers before updating
  emailSuggestions.innerHTML = '';

  if (atSymbolIndex !== -1) {
    // If the '@' character is present in the entered mail, suggest autocomplete
    var domain = inputValue.substring(atSymbolIndex + 1);

    // List of popular domains for autocomplete
    var popularDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];

    // Filter popular domains for display
    var matchingDomains = popularDomains.filter(function (popularDomain) {
      return popularDomain.startsWith(domain);
    });

    // Add matching domains to offers
    matchingDomains.forEach(function (matchingDomain) {
      var option = document.createElement('option');
      option.value = inputValue.substring(0, atSymbolIndex + 1) + matchingDomain;
      emailSuggestions.appendChild(option);
    });
  }
});

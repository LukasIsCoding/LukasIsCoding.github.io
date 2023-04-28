// Replace 'your_api_key' with your actual API key
const closeApiKey = 'api_0mmDclF6WB6Jjn20lG9WEd.4KQC7ThSwuH4qi2KmI6Il0';

// Define the function to handle the custom button click
function onCustomButtonClick() {
  // Your custom action logic here, e.g., create a new lead
  createNewLead();
}

// Function to create a new lead in Close CRM
function createNewLead() {
  const leadData = {
    // Your lead data here, e.g., name, email, etc.
    name: 'TEsting API',
    email: 'testing@api.com',
  };

  // Call the Close CRM API to create the lead
  fetch('https://api.close.com/api/v1/lead/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer \${closeApiKey}`,
    },
    body: JSON.stringify(leadData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Lead created:', data);
    })
    .catch((error) => {
      console.error('Error creating lead:', error);
    });
}

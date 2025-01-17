// List of fictional emails
const emails = [
    'john@example.com',
    'mary@example.com',
    'peter@example.com',
    'anna@example.com',
    'charles@example.com'
];

// List to store failed emails
const failedEmails = [];

// Function to simulate a POST request
async function sendEmail(url = "", data = {}) {

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        return response.json();
    } catch (error) {
        console.error(error);
    }
}

// Main function to process emails
async function processEmails() {
    console.log('Starting email processing...');

    for (const email of emails) {
        const data = {
            "email": email,
            "app_id": "12"
        }
        const url = ''; // Add the URL of the email sending API

        const result = await sendEmail(url, data);

        if (result) {
            console.log(`✅ Email sent successfully: ${email}`);
        } else {
            console.log(`❌ Error sending email: ${email}`);
            failedEmails.push(email);
        }
    }

    console.log('\nProcessing finished!');
    console.log('Failed emails:', failedEmails);
}

// Add an interface for entering e-mails
function openPopup() { 
    const style = document.createElement('style');
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerHTML = `
        <h2 class="popup-title">Insert emails</h2>
        <div class="popup-content">
        <label for="emails" class="popup-label">E-mail addresses (separated by spaces):</label>
        <input type="text" id="emails" name="emails" class="popup-input">
        <br><br>
        <button onclick="processEmails()" class="popup-button btn-primary">Soumettre</button>
        <button onclick="closePopup()" class="popup-button btn-secondary">Fermer</button>
    `
    style.innerHTML = `
        #popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
            border: 1px solid #ccc;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }

        .popup-title {
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        .popup-label {
            display: block;
            margin-bottom: 5px;
        }

        .popup-input {
            width: 90%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .popup-button {
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .btn-primary {
            background-color: #007bff;
            color: #fff;
        }

        .btn-secondary {
            background-color: #ccc;
            color: #333;
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(popup);
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
        document.body.removeChild(popup);
    }
}

openPopup();
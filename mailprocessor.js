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
        const result = await sendEmail('https://api-example.com/send', data);

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

processEmails();
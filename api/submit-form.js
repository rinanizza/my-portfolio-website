// api/submit-form.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Process the form data here (e.g., save to a database, send email, etc.)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    res.status(200).json({ message: 'Form submitted successfully' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

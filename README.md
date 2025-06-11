A Node.js microservice that accepts file uploads and returns metadata about the uploaded file (name, type, and size). Built with Express.js and multer middleware for handling file uploads.

# File Metadata Microservice

This project is part of the [freeCodeCamp Back-End Development and APIs Certification](https://www.freecodecamp.org/learn). It is a backend application that allows users to upload a file and receive its metadata in response.

## 📌 Project Objective

Created an API endpoint that accepts file uploads and returns a JSON response containing:
- `name`: original file name
- `type`: file MIME type
- `size`: file size in bytes

## 🚀 Live Demo / Local Setup

> Example: http://localhost:3000  
To run locally:

```bash
git clone [https://github.com/<your-username>/<repo-name>.git](https://github.com/narendrajethi220/File-Metadata-Microservice.git)
cd file-metadata-microservice
npm install
npm start
🔄 Endpoint
POST /api/fileanalyse
Form Field Name (for file upload): upfile
Make sure the file input field in your form has this attribute:

html
Copy
Edit
<input type="file" name="upfile" />
Response:

json
Copy
Edit
{
  "name": "example.txt",
  "type": "text/plain",
  "size": 1024
}
🧰 Tools & Libraries Used
Node.js

Express.js

Multer for handling file uploads

✅ Requirements Covered
Accepts a file uploaded via form-data.

Returns file name, type, and size in JSON.

Uses multer middleware to process files.

🎓 Certification
This project is part of the FreeCodeCamp Backend Development and APIs certification.

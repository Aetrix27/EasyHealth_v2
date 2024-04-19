# EasyHealth_v2

This app allows patients to upload documents once authenticated, and they can handwrite notes.

Routes:
/ displays the home page
/createDocument allows users to create a document
/document displays all of the documents
/document/delete deletes a document


How to Install packages and Run:
Open a terminal in the root directory of the project and run:
npm install 
Then right click on the client folder and open a terminal within than directory. Then do npm install again.
Next go back to the root directory and run npm run build then npm run dev

You must also create a .env file in the root directory with the following:
MONGODB_CONNECTION_STRING = [Put mongo atlas connection database here]
SKIP_PREFLIGHT_CHECK=true
NODE_ENV = development
PORT = 8080
NODE_OPTIONS=--openssl-legacy-provider



Using the app:
You must register first then login to create a document. Then you can view the documents you create.


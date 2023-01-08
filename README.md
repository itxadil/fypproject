# fypproject
This repositroy includes three folders for frontend, backend and chatbot
There are two branches in this repository named main and master

All the code has been placed in master branch so you have to select master branch to access the code

Frontend:

To run frontend, open the folder in vscode and write the commands given below 
1: cd frontend
2: npm install
3: npm start

Backend:
To run backend, open the folder in vscode and write the commands given below 
1: cd backend
2: npm install
3: nodemon index.js

ChatBot:

Project description:
It is a chat bot developed on RASA. Initially, it is trained on some specific training data. The model used is Neural Network. The Chatbot can answer issues related to

User’s personal information editing.
User’s social media accounts links editing.
About delivery of lectures.
Issues related to internet hardware.
 

Project Manual:
For running the RASA project, you should have installed RASA into your System. RASA can also be installed in an environment created on anaconda. RASA only support Python Version 3.8.

If RASA is installed into an environment, the follow the following commands to run the project.

Open Anaconda prompt.
Type: conda activate [name of your environment]
Type: rasa –h
Shift to the folder where the Chatbot code is kept, type: cd [path]
Open another Anaconda prompt (do not close the older prompt).
Type: conda activate [name of your environment]
Shift to the folder where the Chatbot code is kept, type: cd [path]
Type: rasa run actions
Go back to older prompt.
Type: rasa shell
Query can be inserted and the Chatbot will answer. To stop it, type “/stop”.



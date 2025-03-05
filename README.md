# Notemaker - Mark the Note

## Problem Statement
In today's fast-paced world, keeping track of notes and important information is essential. However, managing notes manually can become disorganized and difficult. The "Notemaker" application is designed to help users add, manage, and view their notes in an organized and user-friendly interface. This app allows users to easily add subjects and descriptions for each note, view previously added notes, and maintain a digital space for important information.

The objective of this project is to provide a simple but effective note-taking tool that connects a frontend user interface with a backend server and a MongoDB database for persistent data storage.

---

## Features

- **Add Notes**: Users can add new notes by entering a subject and description.
- **View Notes**: All added notes are displayed in a list format.
- **Delete Notes**: Notes can be deleted from the list.
- **Responsive UI**: The app is built with responsive design for a great user experience on different screen sizes.
- **API Integration**: Frontend communicates with backend via HTTP requests using Axios.
- **Database Integration**: Data is stored in a MongoDB database, ensuring that notes persist even after restarting the server.

---

## Technologies Used

- **Frontend**: 
  - React.js
  - Bootstrap
  - Axios
  - CSS for styling

- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose (ODM for MongoDB)
  - CORS for cross-origin requests

---

## API Endpoints

### 1. **POST /addNotes**
- **Description**: Add a new note to the database.
- **Request Body**:
  ```json
  {
    "subject": "Your Subject",
    "description": "Your note description"
  }
  ```

### 2. **GET /getNotes**
- **Description**: Fetch all notes from the database.
- **Response**: An array of notes.
  ```json
  [
    {
      "subject": "Sample Note",
      "description": "This is a sample note description."
    }
  ]
  ```

### 3. **DELETE /deleteNotes/:id**
- **Description**: Delete a note by its ID.
- **URL Parameter**: `id` - The ID of the note to be deleted.

---

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add feature'`)
5. Push to the branch (`git push origin feature-name`)
6. Create a pull request

---

## Acknowledgements

- React.js documentation for frontend guidance.
- Express.js documentation for backend API creation.- MongoDB documentation for database setup.


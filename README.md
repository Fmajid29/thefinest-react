# The Finest - Restaurant Website

The Finest is a restaurant website built using React and Firebase as its backend.

## Features

- View menu items
- Make reservations
- Order food online
- View restaurant information

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/TheFinest.git

   ```

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

4. Open http://localhost:3000 in your browser.

## Firebase Setup

1. Create a Firebase project at https://console.firebase.google.com/.
2. Enable Authentication in the Firebase console and select email/password as the sign-in method.
3. Create a Cloud Firestore database in the Firebase console.
4. Create a Firebase Storage bucket in the Firebase console.

## Configuration

1. Create a .env.local file in the root directory of your project.
2. Add the following configuration values to your .env.local file:

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

## Credits

The Finest was created by @ShalinaK.

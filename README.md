# LiNote

Progressive web app using Svelte for writing messages on a collaborative board.

## Getting started

You will need to create a Firebase project, and to attach to it a Google Firestore Database with an empty collection named `notes`.

In the root directory, create a `.env` file containing your Google Firebase credentials :

```
FIRESTORE_API_KEY=aaaaaaaaaaaaaaaa_aaaaaaaaaaaaaaaaaaaaaaa
FIRESTORE_AUTH_DOMAIN=appname-aaaaa.firebaseapp.com
FIRESTORE_PROJECT_ID=appname-aaaaa
FIRESTORE_STORAGE_BUCKET=appname-aaaaa.appspot.com
FIRESTORE_MESSAGING_SENDER_ID=11111111111
FIRESTORE_APP_ID=1:11111111111:web:aaaaaaaaaaaaaaaaaaaaaa
```

## Develop
```
npm install
npm run dev
```

## Deploy
```
npm install
npm build
npm start
```

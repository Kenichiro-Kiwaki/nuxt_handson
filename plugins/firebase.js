import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyArdFeE7Tc1NeoF5I_76Jyh5jJ4CnGsWmI",
        authDomain: "nuxt1stapp.firebaseapp.com",
        databaseURL: "https://nuxt1stapp.firebaseio.com",
        projectId: "nuxt1stapp",
        storageBucket: "nuxt1stapp.appspot.com",
        messagingSenderId: "607891581366",
        appId: "1:607891581366:web:3e101b372060e0d05f3917"
    }
  )
}

export default firebase
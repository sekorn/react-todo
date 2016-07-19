import firebase from 'firebase'

try {
  var config = {
    apiKey: "AIzaSyBf8U9zivrSQzmRwaLDuDYMQNPLMbpfJno",
    authDomain: "sek-todo-app.firebaseapp.com",
    databaseURL: "https://sek-todo-app.firebaseio.com",
    storageBucket: "sek-todo-app.appspot.com",
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

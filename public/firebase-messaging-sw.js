// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCjOIZy9kfmsO184x5Dwa61YIARkMVQ5e0",

  authDomain: "laravel-otp-e05e3.firebaseapp.com",

  projectId: "laravel-otp-e05e3",

  storageBucket: "laravel-otp-e05e3.appspot.com",

  messagingSenderId: "347071992535",

  appId: "1:347071992535:web:2dff89f167318f5cb85692",

  measurementId: "G-NNWD1XZZC5"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);
  
  const notificationTitle = payload.notification.title || 'New Message';
  const notificationOptions = {
    body: payload.notification.body || 'You have a new message.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
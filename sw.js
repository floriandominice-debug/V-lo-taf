importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyC7zdet_pm9VN6HRF7VDsvoj1jROYtWuVk",
  authDomain: "velo-taf-notif.firebaseapp.com",
  projectId: "velo-taf-notif",
  storageBucket: "velo-taf-notif.firebasestorage.app",
  messagingSenderId: "288912454846",
  appId: "1:288912454846:web:99f7678941e49ba2fadaef"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Notification reçue en arrière-plan:', payload);
  
  const notificationTitle = payload.notification.title || 'Vélo Taf';
  const notificationOptions = {
    body: payload.notification.body || '',
    icon: '/icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

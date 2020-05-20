import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  export { firebase, database as default };

//   const expenses = [];

//   // child_removed

//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })

//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })

// database.ref('expenses').once('value').then((snapshot) => {
//     console.log(snapshot.val())
// })

// setTimeout(() => {
//     database.ref('expenses/-M7m5KICLZhqhySrNDaY/amount').set(1200)
// }, 3000)

//   database.ref('expenses').on('value', (snapshot) => {
//     snapshot.forEach((item) => {
//         expenses.push({
//             id: item.key,
//             ...item.val()
//     });
//   });
//   console.log(expenses)
// })

// setTimeout(() => {
//     database.ref('expenses').push({
//         desc: 'bills',
//         amount: 400,
//         createdAt: 34332
//     })
// }, 3000)

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((item) => {
//             expenses.push({
//                 id: item.key,
//                 ...item.val()
//             });
//         });

//         console.log(expenses);
//     })

//   database.ref('expenses').push({
//       desc: 'Rent',
//       Amount: 1000,
//       CreatedAt: 0
//   })

//   database.ref('notes').push({
//       title: 'Course topics',
//       body: 'React, Node'
//   });

//   database.ref().on('value', (snapshot) => {
//       const data = snapshot.val();
//       console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
//   })

//   setTimeout(() => {
//     database.ref('job/title').set('manager')
//   }, 3000);

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (err) => {
//       console.log('Error with data fetching', err)
//   });

//   setTimeout(() => {
//     database.ref('age').set(28);
//   }, 3000);

//   setTimeout(() => {
//     database.ref('age').set(29);
//     database.ref().off(onValueChange);
//   }, 6000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 9000);
  

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log('Error fetching data', err)
//     })

//   database.ref().set({
//     name: 'Rysz',
//     age: 31,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Krakow',
//         country: 'Poland'
//     }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((err) => {
//       console.log('This failed', err)
//   })

//   database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Warsaw'
//   });

// database.ref('isSingle').remove()
//   .then(() => {
//       console.log('Data successfully removed')
//   }).catch((err) => {
//       console.log('Removal failed:', err)
//   })



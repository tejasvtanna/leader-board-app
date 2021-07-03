import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyC-sEhOJZkqc-dm3bh24HJXO0eJFbtBKS4',
  authDomain: 'leaderboard-app-32c51.firebaseapp.com',
  projectId: 'leaderboard-app-32c51',
  storageBucket: 'leaderboard-app-32c51.appspot.com',
  messagingSenderId: '919991324652',
  appId: '1:919991324652:web:80f6811babad5963407ac9',
  databaseURL: 'https://leaderboard-app-32c51-default-rtdb.firebaseio.com/'
}

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref()

export const leadersRef = databaseRef.child('leaders')
export default firebase

export function insert() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export function increment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export function decrement() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

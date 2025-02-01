import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig={
    apiKey: "AIzaSyDyPR2UYyOnCfMdS3SJ-LxBDxElVEXQgEo",
    authDomain: "authentication-form-231224.firebaseapp.com",
    projectId: "authentication-form-231224",
    storageBucket: "authentication-form-231224.firebasestorage.app",
    messagingSenderId: "311296692008",
    appId: "1:311296692008:web:174a29c0bf2d675d938a1d",
    measurementId: "G-DVJ775VCSZ",
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
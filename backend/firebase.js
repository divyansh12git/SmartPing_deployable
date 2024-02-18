import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,doc,setDoc} from "firebase/firestore";

const {
    API_FIREBASE_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGE_ID,
    APP_ID,
    MEASUREMENT_ID
}=process.env;

const firebaseConfig = {
    apiKey:API_FIREBASE_KEY ,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId:MESSAGE_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };

  let app;
  let firestoreDb;
  const initializeFirebaseApp=()=>{
    try{
        app=initializeApp();
        firestoreDb=getFirestore();
        return app;
    }catch(err){
        console.log(err)
    }
  }

  const uploadProcessedData=()=>{
    const datatoUpload={
        key1:"123",
        key2:"456",
        key3:"789"
    }
   
  };


  const getFirebaseApp=()=>app;
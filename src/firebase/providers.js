import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async ()=>{
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        const { displayName, email, photoURL, uid} = result.user;
        // const credentians = GoogleAuthProvider.credentialFromResult( result );
        // console.log( {credentials} );
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        }
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.error( error );
        return {
            ok: false,
            errorMessage,
            errorCode
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName })=>{
    try{
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
       const { uid, photoURL } = resp.user;

       await updateProfile( FirebaseAuth.currentUser, { displayName } );

       return {
        ok: true,
        uid,
        displayName,
        email,
        photoURL
       }
    } catch ( error ){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error( error );
        return {
            ok: false,
            errorMessage,
            errorCode
        }
    }
}

export const loginWithEmailPassword = async ({ email, password })=>{
    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid,
            photoURL,
            displayName
        }
    } catch ( error ){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error( error );
        return {
            ok: false,
            errorMessage,
            errorCode
        }
    }
}

export const logoutFirebase = async ()=>{
    return await FirebaseAuth.signOut();
}
import {FacebookAuthProvider, getAuth, signInWithPopup} from "firebase/auth";

const openFacebookLoginPopup = () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();

    return signInWithPopup(auth, provider);
}

export { openFacebookLoginPopup }
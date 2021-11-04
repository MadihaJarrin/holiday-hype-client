import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    //registration
    // const registration = (email, password) => {
    //     return createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             setUser(result.user);
    //         })
    //         .catch((error) => {
    //             setError(error.message)
    //         });
    // };

    //sign in 
    // const signin = (email, password) => {
    //     return signInWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             setUser(result.user);
    //             console.log(result.user)
    //         }).catch((error) => {
    //             setError(error.message)
    //         })
    // };

    //google sign in 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            }).catch((error) => {
                setError(error.message)
            })
            .finally(() =>
                setIsLoading(false));

    };
    //observe user state change 
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, [])

    //Log out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
        // registration,
        // signin,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;

// "rewrites": [ {
//     "source": "**",
//     "destination": "/index.html"
//   } ]
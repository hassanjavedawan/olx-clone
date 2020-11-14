import firebase from '../../config/firebase';

const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then( (result)=> {
            var user = result.user;
            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }
            firebase.database().ref('/').child(`user/${user.uid}`).set(create_user)
                .then(() => {
                    dispatch({ type: 'SETUSER', payload: create_user })

                    alert(`${user.displayName} your login succesful`)
                })


        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage)
        });
    };
};

const logOut = () => {
    firebase.auth().signOut()
}

const getFirebaseData = () => {
    let arr =[]
    return (dispatch) => {   
        firebase.database().ref('/').child(`adsData/`).on('child_added', (data) => {
            arr.push(data.val())
        })
        dispatch({ type: 'FirebaseData', payload: arr })
        console.log('action data',arr)
    }
}


   const set_name =() =>{
return(dispatch)=>{
   
    dispatch({
        // type: "SETDATA", payload: card
      
    })


}}


export {
    facebook_login,
    logOut,
    getFirebaseData,
    set_name,

}
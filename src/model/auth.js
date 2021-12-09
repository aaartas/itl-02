
//twitterログイン処理
export const login = async (callback) => {
    const { getAuth, TwitterAuthProvider, signInWithPopup } = await import('firebase/auth');
    const { getFirestore, getDoc, doc } = await import('firebase/firestore');
    const provider = new TwitterAuthProvider();
    const auth = getAuth();
    
    signInWithPopup(auth, provider)
    .then(async () => {
        //新規ユーザーの時、リストデータ作成
        const db = getFirestore();
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if(!docSnap.exists()){
            const { setDoc } = await import('firebase/firestore');
            await setDoc(doc(db, "users", auth.currentUser.uid), {
                user_name: auth.currentUser.displayName,
                user_img: auth.currentUser.photoURL,
                twitter_name: auth.currentUser.reloadUserInfo.screenName,
                twitter_id: auth.currentUser.providerData[0].uid
            });
        }
        
        //ログイン後、自動でマイページに遷移
        const { routing } = await import('../controller/pageController');
        routing('mypage');
        if (callback) {
            callback();
        }
        
    }).catch((error) => {
        console.log(error);
    });
}

//ログアウト処理
export const logout = async () => {
    const { getAuth, signOut } = await import('firebase/auth');
    await signOut(getAuth());
}

//ユーザーデータ取得
export const getUserData = async (uid) => {
    const { getFirestore, getDoc, doc } = await import('firebase/firestore');
    const db = getFirestore();
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let data = {
            id: docSnap.data().twitter_id,
            disp_name: docSnap.data().user_name,
            user_name: docSnap.data().twitter_name,
            icon: docSnap.data().user_img
        }
        return data;
    } else {
        console.log('ユーザーデータがありません');
    }
}
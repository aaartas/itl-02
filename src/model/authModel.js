
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
        const docRef = doc(db, 'users', auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if(!docSnap.exists()){
            const { setDoc } = await import('firebase/firestore');
            await setDoc(doc(db, 'users', auth.currentUser.uid), {
                user_name: auth.currentUser.displayName,
                user_icon: auth.currentUser.photoURL,
                user_title: 'の行きたいとこリスト',
                user_bio: '',
                twitter_disp_id: auth.currentUser.reloadUserInfo.screenName,
                twitter_sys_id: auth.currentUser.providerData[0].uid
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
    signOut(getAuth());
}




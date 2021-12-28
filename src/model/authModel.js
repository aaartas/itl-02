//twitterログイン処理
export const login = async (callback) => {
    const { getAuth, TwitterAuthProvider, signInWithPopup } = await import('firebase/auth');
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    
    signInWithPopup(auth, provider)
    .then(async () => {
        //新規ユーザーの時、リストデータ作成
        const { getFirestore, getDoc, doc } = await import('firebase/firestore');
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

        // canvasアニメーションをコールバック
        if (callback) {
            callback();
        }
    });
}

//ログアウト処理
export const logout = async () => {
    const { getAuth, signOut } = await import('firebase/auth');
    signOut(getAuth());
}




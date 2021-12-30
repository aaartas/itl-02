//twitterログイン処理
export const login = async (callback) => {
    const { getAuth, TwitterAuthProvider, signInWithRedirect } = await import('firebase/auth');
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    
    signInWithRedirect(auth, provider)
    .then(async () => {
        //新規ユーザーの時、リストデータ作成
        const { createUserData } = await import('./userModel');
        await createUserData(auth.currentUser);
        
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
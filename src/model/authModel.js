//twitterログイン処理
export const login = async () => {
    const { getAuth, TwitterAuthProvider, signInWithRedirect } = await import('firebase/auth');
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    
    signInWithRedirect(auth, provider);
    // .then(async () => {
    //     //新規ユーザーの時、リストデータ作成
    //     const { createUserData } = await import('./userModel');
    //     await createUserData(auth.currentUser);
        
    //     //ログイン後、自動でマイページに遷移
    //     const { routing } = await import('../controller/pageController');
    //     routing('mypage');
    //     console.log('test')

    //     // canvasアニメーションをコールバック
    //     if (callback) {
    //         callback();
    //     }
    // })

    
}

export const checkAuth = async () => {
    const { getAuth, getRedirectResult } = await import('firebase/auth');
    const auth = getAuth();
    getRedirectResult(auth).then(async (result) => {
        console.log(result)
        if (result != null) {
            //新規ユーザーの時、リストデータ作成
            const { createUserData } = await import('./userModel');
            await createUserData(auth.currentUser);

            //ログイン後、自動でマイページに遷移
            const { routing } = await import('../controller/pageController');
            routing('mypage');
        }
    })
}



//ログアウト処理
export const logout = async () => {
    const { getAuth, signOut } = await import('firebase/auth');
    signOut(getAuth());
}
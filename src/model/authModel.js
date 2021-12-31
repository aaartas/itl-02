//twitterログイン処理
export const login = async () => {
    const { getAuth, TwitterAuthProvider, signInWithRedirect } = await import('firebase/auth');
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    
    signInWithRedirect(auth, provider);
}

// ログインリダイレクト時の処理
export const checkLoginRedirect = async () => {
    const { getAuth, getRedirectResult, onAuthStateChanged } = await import('firebase/auth');
    const auth = getAuth();
    getRedirectResult(auth).then(async (result) => {
        if (result != null) {
            //ログイン後、自動でマイページに遷移
            const { routing } = await import('../controller/commonController');
            routing('mypage');

            //新規ユーザーの時、リストデータ作成
            const { createUserData } = await import('./userModel');
            await createUserData(auth.currentUser);
            return result.user;
        } else {
            return false;
        }
    })

    onAuthStateChanged(auth, (user) => {
        // console.log(user)
    });
}

//ログアウト処理
export const logout = async () => {
    const { getAuth, signOut } = await import('firebase/auth');
    signOut(getAuth());
}
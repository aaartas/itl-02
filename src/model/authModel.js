//twitterログイン処理
export const login = async () => {
    const { getAuth, TwitterAuthProvider, signInWithRedirect } = await import('firebase/auth');
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    
    signInWithRedirect(auth, provider);
}

// ログインリダイレクト時の処理
export const checkLoginRedirect = async () => {
    const { getAuth, getRedirectResult } = await import('firebase/auth');
    const auth = getAuth();
    getRedirectResult(auth).then(async (result) => {
        if (result != null) {
            const { getUserData, createUserData } = await import('./userModel');
            const dbUserData = await getUserData(result.user.uid);
            // 新規ユーザーの時、リストデータ作成
            if (!dbUserData) {
                await createUserData(result.user);
            }

            //ログイン後、自動でマイページに遷移
            const { routing } = await import('../controller/commonController');
            routing('mypage');
        }
    })
}

//ログアウト処理
export const logout = async () => {
    const { getAuth, signOut } = await import('firebase/auth');
    signOut(getAuth());
}
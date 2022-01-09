

// twitterログイン処理
export const login = async () => {
    const { getAuth, TwitterAuthProvider, linkWithRedirect } = await import('firebase/auth');
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    
    linkWithRedirect(auth.currentUser, provider);
}

// ログインリダイレクト時の処理
export const checkLoginRedirect = async () => {
    const { getAuth, getRedirectResult } = await import('firebase/auth');
    const auth = getAuth();
    getRedirectResult(auth).then(async (result) => {
        if (result != null) {
            const { upgradeUserData } = await import('./userModel');
            upgradeUserData(result.user);
        }
    })
}

//ログアウト処理
export const logout = async () => {
    const { getAuth, signOut } = await import('firebase/auth');
    signOut(getAuth());
}
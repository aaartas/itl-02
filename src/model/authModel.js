

// twitterログイン処理
export const login = async () => {
    const { getAuth, TwitterAuthProvider, signInWithRedirect } = await import('firebase/auth');
    const auth = getAuth();
    const provider = new TwitterAuthProvider();
    
    signInWithRedirect(auth, provider);
}

// twitter紐付け
export const linkAccount = async () => {
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
            const { getUserData } = await import('./userModel');
            const userData = await getUserData(result.user.uid);
            if (!userData) {
                const { createUserData } = await import('./userModel');
                await createUserData(result.user);
                const { routing } = await import('../controller/commonController');
                routing('');
            }
        }
    }).catch(async () => {
        const { addNotice } = await import('../controller/commonController');
        addNotice('このTwitterアカウントは既に使用されています。', true);
    });
}

//ログアウト処理
export const logout = async () => {
    const { getAuth, signOut } = await import('firebase/auth');
    signOut(getAuth());
}
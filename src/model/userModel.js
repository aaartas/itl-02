// ユーザーデータ取得
export const getUserData = async (uid) => {
    const { getFirestore, getDoc, doc } = await import('firebase/firestore');
    const db = getFirestore();
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = {
            uid: uid,
            user_name: docSnap.data().user_name,
            user_icon: docSnap.data().user_icon,
            list_title: docSnap.data().list_title,
            user_bio: docSnap.data().user_bio,
            twitter_disp_id: docSnap.data().twitter_disp_id,
            twitter_sys_id: docSnap.data().twitter_sys_id,
            user_regist_date: docSnap.data().user_regist_date
        }
        return data;
    } else {
        return false;
    }
}

// 匿名ユーザーデータ作成
export const createUserData = async (user) => {
    const { getFirestore, setDoc, doc, serverTimestamp } = await import('firebase/firestore');
    const db = getFirestore();
    const providerData = user.reloadUserInfo.providerUserInfo[0];
    await setDoc(doc(db, 'users', user.uid), {
        user_name: providerData.displayName,
        user_icon: providerData.photoUrl,
        list_title: 'の行きたいとこリスト',
        user_bio: '一緒にいきましょう!',
        twitter_disp_id: providerData.screenName,
        twitter_sys_id: providerData.rawId,
        user_regist_date: serverTimestamp()
    });
}

// ユーザーデータ変更のチェック
export const checkUserData = (preUserData, userData) => {
    const preUserDataJSON = JSON.stringify(Object.entries(preUserData).sort());
    const userDataJSON = JSON.stringify(Object.entries(userData).sort());

    if (preUserDataJSON === userDataJSON) {
        return false;
    } else {
        return true;
    }
}

// ユーザーデータ更新
export const updateUserData = async (userData) => {
    const { 
        getFirestore,
        doc,
        updateDoc
    } = await import('firebase/firestore');

    const db = getFirestore();
    updateDoc(doc(db, 'users', userData.uid), {
        user_name: userData.user_name,
        user_icon: userData.user_icon,
        list_title: userData.list_title,
        user_bio: userData.user_bio,
        twitter_disp_id: userData.twitter_disp_id
    });
}
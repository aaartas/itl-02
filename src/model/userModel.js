// ユーザーデータ作成


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
            twitter_sys_id: docSnap.data().twitter_sys_id
        }

        return data;
    }
}

// プロフィール変更のチェック
export const checkUserData = (preUserData, userData) => {
    const preUserDataJSON = JSON.stringify(Object.entries(preUserData).sort());
    const userDataJSON = JSON.stringify(Object.entries(userData).sort());

    if (preUserDataJSON === userDataJSON) {
        return false;
    } else {
        return true;
    }
}

// プロフィール編集内容の保存
export const updateUserData = async (UserData) => {
    const { 
        getFirestore,
        doc,
        updateDoc
    } = await import('firebase/firestore');

    const db = getFirestore();
    updateDoc(doc(db, 'users', UserData.uid), {
        list_title: UserData.list_title,
        user_bio: UserData.user_bio
    });
}
export const getLists = async (uid) => {
    let lists = [];
    const { 
        getFirestore,
        collection,
        getDocs,
        query,
        where
    } = await import('firebase/firestore');
    const db = getFirestore();
    const q = query(collection(db, 'users', uid, 'lists'), where('removed', '==', false));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        lists.push({
            id: doc.id,
            name: doc.data().name,
            check: doc.data().check,
            removed: doc.data().removed
        })
    });

    return lists;
}

//リスト編集内容の保存
export const saveData = async (uid, yetLists, doneLists) => {
    const { 
        getFirestore,
        collection,
        getDocs,
        query,
        addDoc,
        doc,
        updateDoc,
        serverTimestamp
    } = await import('firebase/firestore');
    //DBから編集前のリストデータ取得
    let preLists = [];
    const getPre = async () => {
        const db = getFirestore();
        const q = query(collection(db, 'users', uid, 'lists'));
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
            preLists.push({
                id: doc.id,
                name: doc.data().name,
                check: doc.data().check,
                removed: doc.data().removed
            })
        });
    }
    await getPre();

    preLists.map((preList) => {
        //元々行ったチェックされていたリストを更新
        doneLists.map((list) => {
            if(list.id === preList.id){
                if(JSON.stringify(list) !== JSON.stringify(preList)){
                    const db = getFirestore();
                    updateDoc(doc(db, 'users', uid, 'lists', preList.id), {
                        name: list.name,
                        check: list.check,
                        removed: list.removed,
                        timestamp: serverTimestamp()
                    });
                }
            }
        });
        //元々行ったチェックされていなかったリストを更新
        yetLists.map((list) => {
            if(list.id === preList.id){
                if(JSON.stringify(list) !== JSON.stringify(preList)){
                    const db = getFirestore();
                    updateDoc(doc(db, 'users', uid, 'lists', preList.id), {
                        name: list.name,
                        check: list.check,
                        removed: list.removed,
                        timestamp: serverTimestamp()
                    });
                }
            }
        });
        
    });

    //新規追加されたリストを抽出
    let newLists = yetLists.filter(({id}) => {
        const _id = id;
        return preLists.findIndex(({id}) => id === _id) === -1
    });

    //DBにリストデータ新規作成
    newLists.map((list) => {
        const db = getFirestore();
        addDoc(collection(db, "users", uid, 'lists'), {
            name: list.name,
            check: list.check,
            removed: list.removed,
            timestamp: serverTimestamp()
        });
    });
}
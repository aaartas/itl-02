// リストデータ取得
export const getLists = async (uid) => {
    const { 
        getFirestore,
        collection,
        getDocs,
        query,
        where
    } = await import('firebase/firestore');
    const db = getFirestore();
    const q = query(collection(db, 'users', uid, 'list'), where('item_remove', '==', false));
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map((doc) => {
        return {
            iid: doc.id,
            name: doc.data().item_name,
            check: doc.data().item_check,
            remove: doc.data().item_remove,
            order: doc.data().item_order,
            regist_date: doc.data().item_regist_date,
            check_date: doc.data().item_check_date
        }
    });
    return list;
}


// リスト編集内容の保存
export const saveData = async (uid, yetList, doneList, preList) => {
    const { 
        getFirestore,
        collection,
        addDoc,
        doc,
        updateDoc,
        serverTimestamp
    } = await import('firebase/firestore');

    const db = getFirestore();

    // アクティブリスト更新
    yetList.forEach(item => {
        const find = preList.find(({iid}) => iid === item.iid);
        if (find === undefined) {
            // 新規追加
            if (!item.remove) {
                addDoc(collection(db, 'users', uid, 'list'), {
                    item_name: item.name,
                    item_check: item.check,
                    item_remove: false,
                    item_order: item.order,
                    item_regist_date: serverTimestamp(),
                    item_check_date: item.check ? serverTimestamp() : null
                });
            }
        } else {
            // リスト更新
            if(JSON.stringify(item) !== JSON.stringify(find)) {
                updateDoc(doc(db, 'users', uid, 'list', find.iid), {
                    item_name: item.name,
                    item_check: item.check,
                    item_remove: item.remove,
                    item_order: item.order,
                    item_check_date: item.check ? serverTimestamp() : null
                });
            }
        } 
    });

    // 元々チェック済のリストは削除のみ
    doneList.forEach(item => {
        const find = preList.find(({iid}) => iid === item.iid);
        if (item.remove) {
            updateDoc(doc(db, 'users', uid, 'list', find.iid), {
                item_remove: item.remove
            });
        }
    });
}
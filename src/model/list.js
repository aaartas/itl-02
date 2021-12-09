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
import userEnv from 'userEnv';

// firebase設定
//本番用
const config = {
    apiKey: userEnv.apiKey,
    authDomain: userEnv.domain,
    projectId: userEnv.projectId,
    storageBucket: userEnv.storageBucket,
    messagingSenderId: userEnv.messagingSenderId,
    appId: userEnv.appId,
    measurementId: userEnv.measurementId,
};
//テスト環境用
// const config = {
//     apiKey: "AIzaSyAAyBLW_vCh0WWtzlYbLWH4kyZ_3bs9QQc",
//     authDomain: "listapp-test-afe38.firebaseapp.com",
//     projectId: "listapp-test-afe38",
//     storageBucket: "listapp-test-afe38.appspot.com",
//     messagingSenderId: "545174239930",
//     appId: "1:545174239930:web:42f0147f5afddc9b8c6083",
//     measurementId: "G-YKVH9V742P"
// };

// firebase初期化
export const initFirebase = async () => {
    const { initializeApp } = await import('firebase/app');
    initializeApp(config);
}
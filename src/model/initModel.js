// firebase設定
//本番用
const config = {
    apiKey: 'AIzaSyCn5TtBz45t0Lb3MP6snWqGa0_fR-a0gNE',
    authDomain: 'go-list.net',
    databaseURL: 'https://campa-room.firebaseio.com',
    projectId: 'campa-room',
    storageBucket: 'campa-room.appspot.com',
    messagingSenderId: '439711886641',
    appId: '1:439711886641:web:292d5d61beb60cedfd5410',
    measurementId: ''
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
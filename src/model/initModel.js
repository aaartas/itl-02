// firebase設定
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

// firebase初期化
export const initFirebase = async () => {
    const { initializeApp } = await import('firebase/app');
    initializeApp(config);
}
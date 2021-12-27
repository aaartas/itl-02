//firebase初期化

const config = {
    apiKey: 'AIzaSyCn5TtBz45t0Lb3MP6snWqGa0_fR-a0gNE',
    authDomain: 'campa-room.firebaseapp.com',
    databaseURL: 'https://wannago-dev-0000.firebaseio.com',
    projectId: 'campa-room',
    storageBucket: 'campa-room.appspot.com',
    messagingSenderId: '439711886641',
    appId: '1:439711886641:web:292d5d61beb60cedfd5410',
    measurementId: ''
};

export const initFirebase = async () => {
    const { initializeApp } = await import('firebase/app');
    initializeApp(config);
}

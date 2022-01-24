import userEnv from 'userEnv';

// firebase設定
const config = {
    apiKey: userEnv.apiKey,
    authDomain: userEnv.domain,
    projectId: userEnv.projectId,
    storageBucket: userEnv.storageBucket,
    messagingSenderId: userEnv.messagingSenderId,
    appId: userEnv.appId,
    measurementId: userEnv.measurementId,
};

// firebase初期化
export const initFirebase = async () => {
    const { initializeApp } = await import('firebase/app');
    initializeApp(config);
}
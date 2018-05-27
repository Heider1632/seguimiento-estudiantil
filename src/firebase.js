import { initializeApp } from 'firebase';

const app = initializeApp({
        apiKey: "AIzaSyAIdhh8-wL_xHkgjyc-a8wf5jstAxKZxhU",
        authDomain: "seg-est.firebaseapp.com",
        databaseURL: "https://seg-est.firebaseio.com",
        projectId: "seg-est",
        storageBucket: "seg-est.appspot.com",
        messagingSenderId: "845434020174"
});

export const db = app.database();
export const estudianteRef = db.ref('/estudiante');
export const docenteRef = db.ref('/docente');
export const materiaRef = db.ref('/materia');
export const curriculoRef = db.ref('/curriculo');
export const seguimientoRef = db.ref('/seguimiento');
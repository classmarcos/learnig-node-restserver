//========
//puerto
//=======
//process.env.PORT = process.env.PORT || 3000;

//==========
//ENTORNO
//==========
/*process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://mrcos:anaconda459@cafe-sjeu0.mongodb.net/test?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;*/



// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Vencimiento del Token
// ============================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ============================
// SEED  de autenticacion
// ============================

process.env.SEED = process.env.SEED || 'este-es-es-seed-produccion';




// ============================
//  Base de datos
// ============================
let urlDB;
process.env.MONGO_URI = 'mongodb+srv://mrcos:anaconda459@cafe-sjeu0.mongodb.net/cafe?retryWrites=true&w=majority';

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;



// ============================
//  Google Client ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '2491658846-j7j5jhtcu3fibhb279dffsnm3gape7ke.apps.googleusercontent.com';
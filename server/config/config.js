//========
//puerto
//=======
process.env.PORT = process.env.PORT || 3000;

//==========
//ENTORNO
//==========
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = '  mongodb+srv://mrcos:anaconda459@cafe-sjeu0.mongodb.net/test?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;
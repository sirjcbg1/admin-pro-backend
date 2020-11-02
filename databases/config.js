var mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Base de Datos en Linea");

    } catch (error) {
        console.log(error);
        throw new Error("Error al momento de iniciar la base de datos");
    };
};

module.exports = {

    dbConnection: dbConnection
}
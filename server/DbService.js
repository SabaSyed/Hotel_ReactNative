const mysql = require('mysql');
const dotenv = require('dotenv');

let instance = null;

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
})

class DbService {
    static getDbInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM hotels ORDER BY id DESC";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    else resolve(results);
                })
            });

            return response;

        } catch (error) {
            console.log(error);
        }
    }
    async getHotel() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM hotels Where ID = " + 10;

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    else resolve(results);
                })
            });

            return response;

        } catch (error) {
            console.log(error);
        }
    }

    async insertNewItem(name, description) {
        try {
            console.log(name, description);
            const currentDateTime = new Date();
            const insertId = await new Promise((resolve, reject) => {

                const query = "INSERT INTO items (title, description, date_added) VALUES ( ?, ?, ?);";

                connection.query(query, [name, description, currentDateTime], (err, result) => {
                    if (err) reject(new Error(err.message));
                    else resolve(result.insertId);
                })
            });


            return insertId ? true : false;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = DbService;
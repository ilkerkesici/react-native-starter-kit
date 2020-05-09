
require('dotenv').config();

module.exports = {
    mysql : {
        host: process.env.host,
        user: process.env.user,
        password:process.env.password,
        database: process.env.database,
        insecureAuth : true,
        dateStrings : true,
        charset : 'utf8mb4'
    },
    SECRET_KEY: process.env.secret_key,
    CRYPTO_FUNC : process.env.crypto_func,
    CRYPTO_DIGEST : process.env.crypto_digest,
    PORT: process.env.port
}
const crypto = require('crypto');
const config = require('../../config');

/**
 * Encryption a text
 * @param {string} text text which is encrypted
 */
const encrypt = (text) => {
    const hash = crypto.createHmac(config.CRYPTO_FUNC, config.SECRET_KEY)
    .update(text)
    .digest(config.CRYPTO_DIGEST);
    return hash;
}

module.exports = encrypt;
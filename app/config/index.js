/* globals process */
const secret = 'Gosho e pich';
const port = process.env.PORT || 3001;

module.exports = {
    port,
    secret,
};

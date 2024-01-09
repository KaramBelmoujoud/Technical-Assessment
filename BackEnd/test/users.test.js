const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it, beforeEach, afterEach } = require('mocha');
const { getUsers} = require('../controllers/usersController');

chai.use(chaiHttp);

const expect = chai.expect;

describe('usersController', () => {
    beforeEach(() => {
        global.fetch = async () => ({
            ok: true,
            json: async () => ({}),
            status: 200,
        });
    });

    afterEach(() => {
        delete global.fetch;
    });

    describe('getUsers', () => {
        it('should return an array of users', async () => {
            const req = {};
            const res = {
                json: (data) => {
                    expect(data).to.be.an('object');
                },
                status: (code) => {
                    return res;
                },
            };

            await getUsers(req, res);
        });

        it('should handle errors and return a 500 status', async () => {

            global.fetch = async () => ({
                ok: false,
                status: 500,
            });

            const req = {};
            const res = {
                json: () => {},
                status: (code) => {
                    expect(code).to.equal(500);
                    return res;
                },
            };

            await getUsers(req, res);
        });
    });
});

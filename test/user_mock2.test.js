const { UserModel } = require('../src/infrastructure/database');
const user = require('../src/port/user_repository');

describe('create', () => {
    it('Valid User', async () => {
        UserModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                nome: "João",
                email: "joao@inatel.br",
                senha: "123456789",
            }),
        }));

        expect(await user.create({
            id: 1,
            nome: "João",
            email: "joao@inatel.br",
            senha: "123456789"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nome: expect.any(String),
                email: expect.any(String),
                senha: expect.any(String),
            }),
        );
    });
});
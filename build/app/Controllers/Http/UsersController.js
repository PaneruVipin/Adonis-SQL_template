"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UnauthecatedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnauthecatedException"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const UserUpdateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserUpdateValidator"));
class UsersController {
    async me({ request }) {
        return request.loggedInUser;
    }
    async updateMe({ request }) {
        const allUser = User_1.default.all();
        const id = request.loggedInUser?.id;
        const data = await request.validate(UserUpdateValidator_1.default);
        for (let i = 0; i < (await allUser).length; i++) {
            const user = (await allUser)[i];
            if (user.email === data.email && user.id !== id) {
                throw new UnauthecatedException_1.default('This email is already exist');
            }
        }
        if (id)
            await User_1.default.query().where('id', id).update(data);
    }
    async index({}) {
        return User_1.default.all();
    }
    async show({ request }) {
        const id = await request.params().id;
        const user = await User_1.default.query().where('id', id).first();
        if (!user) {
            throw new UnauthecatedException_1.default('user are not avilable');
        }
        return user;
    }
    async update({ request }) {
        const data = await request.validate(UserUpdateValidator_1.default);
        const allUser = User_1.default.all();
        const id = await request.params().id;
        for (let i = 0; i < (await allUser).length; i++) {
            const user = (await allUser)[i];
            if (user.email === data.email && user.id !== id) {
                throw new UnauthecatedException_1.default('This email is already exist');
            }
        }
        await User_1.default.query().where('id', id).update(data);
    }
    async destroy({ request }) {
        const id = await request.params().id;
        await User_1.default.query().where('id', id).delete();
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map
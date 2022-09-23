"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const SignUpValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SignUpValidator"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const LoginValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/LoginValidator"));
const UnauthecatedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnauthecatedException"));
const app_1 = global[Symbol.for('ioc.use')]("Config/app");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthController {
    async signUp({ request }) {
        const data = await request.validate(SignUpValidator_1.default);
        const hashedPassword = await Hash_1.default.make(data.password);
        return User_1.default.create({ ...data, password: hashedPassword });
    }
    async login({ request }) {
        const data = await request.validate(LoginValidator_1.default);
        const user = await User_1.default.query().where('email', data.email).first();
        if (!user) {
            new UnauthecatedException_1.default('login credentals are not valid');
        }
        const isVerified = await Hash_1.default.verify(user.password, data.password);
        if (!isVerified) {
            throw new UnauthecatedException_1.default('login details are not valid');
        }
        const token = jsonwebtoken_1.default.sign({ sub: user.id }, app_1.appKey, { expiresIn: 24 * 60 * 60, jwtid: 'hello' });
        return { token, user };
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UnauthecatedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnauthecatedException"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const app_1 = global[Symbol.for('ioc.use')]("Config/app");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Auth {
    async handle({ request }, next) {
        const token = request.headers().authorization;
        if (!token) {
            throw new UnauthecatedException_1.default('no token found');
        }
        try {
            const data = jsonwebtoken_1.default.verify(token, app_1.appKey);
            request.loggedInUser = await User_1.default.findOrFail(data.sub);
        }
        catch (e) {
            if (e.message === "jwt expired")
                throw new UnauthecatedException_1.default('this token is expired');
            else
                throw new UnauthecatedException_1.default('token are not valid');
        }
        await next();
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UnAuthorizedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnAuthorizedException"));
class AccesController {
    async handle({ request }, next, args) {
        if (!args.includes(request.loggedInUser.role)) {
            throw new UnAuthorizedException_1.default();
        }
        await next();
    }
}
exports.default = AccesController;
//# sourceMappingURL=AccesController.js.map
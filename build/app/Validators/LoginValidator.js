"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const messages_1 = __importDefault(require("./customMessaes/messages"));
class LoginValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email()]),
            password: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(8)])
        });
        this.messages = {
            ...messages_1.default
        };
    }
}
exports.default = LoginValidator;
//# sourceMappingURL=LoginValidator.js.map
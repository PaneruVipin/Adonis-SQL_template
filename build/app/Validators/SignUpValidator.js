"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const messages_1 = __importDefault(require("./customMessaes/messages"));
class SignUpValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            first_name: Validator_1.schema.string({ trim: true, escape: true }, [Validator_1.rules.required()]),
            last_name: Validator_1.schema.string.optional({ trim: true, escape: true }),
            email: Validator_1.schema.string({ trim: true, escape: true }, [Validator_1.rules.email(), Validator_1.rules.unique({ table: 'users', column: 'email' })]),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(8)]),
            dob: Validator_1.schema.string.optional({ trim: true })
        });
        this.messages = {
            ...messages_1.default,
            "unique": "this email is already exist"
        };
    }
}
exports.default = SignUpValidator;
//# sourceMappingURL=SignUpValidator.js.map
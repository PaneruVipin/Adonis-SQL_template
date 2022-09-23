"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class UnauthecatedException extends standalone_1.Exception {
    constructor(message) {
        super(message);
    }
    handle(error, ctx) {
        ctx.response.status(401).json({
            errors: [
                { message: error.message }
            ]
        });
    }
}
exports.default = UnauthecatedException;
//# sourceMappingURL=UnauthecatedException.js.map
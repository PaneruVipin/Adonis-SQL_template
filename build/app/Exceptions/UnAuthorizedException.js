"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class UnAuthorizedException extends standalone_1.Exception {
    constructor() {
        super('you are not authorized for this action');
    }
    handle(error, ctx) {
        ctx.response.status(403).json({
            errors: [
                { message: error.message }
            ]
        });
    }
}
exports.default = UnAuthorizedException;
//# sourceMappingURL=UnAuthorizedException.js.map
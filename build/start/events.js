"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Event"));
Event_1.default.on('mail:sent', ({ message, views, mailer, response }) => {
    console.log(message);
    console.log(views);
    console.log(mailer);
    console.log(response);
});
//# sourceMappingURL=events.js.map
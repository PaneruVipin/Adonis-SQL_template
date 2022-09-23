"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Mail"));
Mail_1.default.monitorQueue((error, result) => {
    if (error) {
        console.log('Unable to send email');
        console.log(error.mail);
        return;
    }
    console.log('Email sent');
    console.log(result?.mail);
    console.log(result?.response);
});
//# sourceMappingURL=mail.js.map
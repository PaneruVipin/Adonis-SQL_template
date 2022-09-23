"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Mail");
class Verifymail extends Mail_1.BaseMailer {
    prepare(message) {
        message
            .subject('The email subject')
            .from('paneruvipinbusiness@gmail.com')
            .to('paneruvipinbusiness@gmail.com')
            .htmlView('emails/verify_email', { name: 'PaneruVipin' });
    }
}
exports.default = Verifymail;
//# sourceMappingURL=Verifymail.js.map
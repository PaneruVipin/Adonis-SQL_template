"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HealthCheck_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/HealthCheck"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('', () => {
    return { 'hello': 'world' };
});
Route_1.default.post('login', 'AuthController.login');
Route_1.default.post('signUp', 'AuthController.signUp');
Route_1.default.group(() => {
    Route_1.default.get('me', 'UsersController.me');
    Route_1.default.put('me', 'UsersController.updateMe');
    Route_1.default.group(() => Route_1.default.resource('user', 'UsersController').apiOnly().middleware({
        '*': 'accesController:admin,super_admin',
        'destroy': 'accesController:super_admin'
    })).prefix('admin');
}).middleware('auth');
Route_1.default.get('health', async ({ response }) => {
    const report = await HealthCheck_1.default.getReport();
    return report.healthy
        ? response.ok(report)
        : response.badRequest(report);
});
//# sourceMappingURL=routes.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const exports_1 = require("../models/exports");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, password, roles } = req.body;
            const rolesIterable = yield exports_1.RolModel.find({ name: { $in: roles } });
            const user = new exports_1.UserModel({
                username,
                email,
                password,
                roles: rolesIterable.map((role) => role._id),
            });
            //encryptPassword
            user.password = yield exports_1.UserModel.encryptPassword(user.password);
            const savedUser = yield user.save();
            return res.status(200).json({
                _id: savedUser._id,
                username: savedUser.username,
                password: savedUser.password,
                roles: savedUser.roles,
            });
        }
        catch (error) { }
    });
}
exports.createUser = createUser;

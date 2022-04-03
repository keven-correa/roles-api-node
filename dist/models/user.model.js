"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.User = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const typegoose_1 = require("@typegoose/typegoose");
const role_model_1 = require("./role.model");
let User = class User {
    static encryptPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcryptjs_1.default.genSalt(10);
            return yield bcryptjs_1.default.hash(password, salt);
        });
    }
    comparePassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.default.compare(password, this.password);
        });
    }
};
__decorate([
    (0, typegoose_1.prop)({ type: String, unique: true })
], User.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, unique: true })
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true })
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => role_model_1.Role })
], User.prototype, "roles", void 0);
User = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            versionKey: false,
            timestamps: true,
        },
    })
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User);

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolModel = exports.Role = exports.ROLES = void 0;
const typegoose_1 = require("@typegoose/typegoose");
exports.ROLES = ["user", "admin", "moderator"];
let Role = class Role {
};
__decorate([
    (0, typegoose_1.prop)({ type: String })
], Role.prototype, "name", void 0);
Role = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            versionKey: false,
        },
    })
], Role);
exports.Role = Role;
exports.RolModel = (0, typegoose_1.getModelForClass)(Role);

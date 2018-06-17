"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(init) {
        this.userid = 0;
        this.email = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
        this.phone = "";
        this.url = "";
        this.role = "";
        this.credit = 0;
        Object.assign(this, init);
    }
    return User;
}());
exports.User = User;

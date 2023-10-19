"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    function Adresse(rue, cp, ville) {
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
    }
    Adresse.prototype.getRue = function () {
        return this.rue;
    };
    Adresse.prototype.getCp = function () {
        return this.cp;
    };
    Adresse.prototype.getVille = function () {
        return this.ville;
    };
    Adresse.prototype.setRue = function (rue) {
        this.rue = rue;
    };
    Adresse.prototype.setCp = function (cp) {
        this.cp = cp;
    };
    Adresse.prototype.setVille = function (ville) {
        this.ville = ville;
    };
    Adresse.prototype.getFullAdresse = function () {
        return this.rue + this.cp + this.ville;
    };
    return Adresse;
}());
exports.Adresse = Adresse;

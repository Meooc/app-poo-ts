"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.getPrenom = function () {
        return this.prenom;
    };
    Personne.prototype.getAdresse = function () {
        return this.adresse;
    };
    Personne.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    Personne.prototype.getFullInfos = function () {
        return this.nom + this.prenom + this.adresse.getFullAdresse();
    };
    return Personne;
}());
exports.Personne = Personne;

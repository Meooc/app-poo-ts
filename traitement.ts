import { Adresse } from './adresse';
import { Personne } from './personne';
import { Enseignant } from './enseignant';

const adressePersonne = new Adresse("12 Rue de la Corde ", "12345 ", "Meaux ");

const personne = new Personne("Doe ", "John ", adressePersonne);

console.log("Nom: " + personne.getNom());
console.log("Prénom: " + personne.getPrenom());
console.log("Adresse: " + personne.getAdresse().getFullAdresse());

const nouvelleAdresse = new Adresse("456 Nouvelle Corde ", "67890 ", "New-Meaux ");
personne.setAdresse(nouvelleAdresse);

console.log("Nouvelle adresse : " + personne.getAdresse().getFullAdresse());

console.log("Informations complètes : " + personne.getFullInfos());

console.log("-----------------------------------------------");

const adresseEnseignant = new Adresse("456 Rue de l'École ", "67890 ", "Écoleville ");
const enseignant = new Enseignant("Professeur ", "Didier ", adresseEnseignant, "Mathématiques ", "Titulaire ");

console.log("Informations complètes : ", enseignant.getFullInfos());
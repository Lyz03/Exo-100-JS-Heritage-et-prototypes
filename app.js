// part 1
/**
 * Véhicule
 * @param couleur
 * @param roues
 * @param marque
 * @constructor
 */
const Vehicule = function (couleur, roues, marque) {
    this.color = couleur;
    this.wheels = roues;
    this.brand = marque;
};

Vehicule.prototype.demarrer = () => console.log('le véhicule démarre');

Vehicule.prototype.arreter = () => console.log("Le véhicule s'arrête");

// part 2
/**
 * Vélo
 * @param couleur
 * @param roues
 * @param marque
 * @param rayonRoues
 * @param typePeinture
 * @constructor
 */
const Velo = function (couleur, roues, marque, rayonRoues, typePeinture) {
    Vehicule.call(this, couleur, roues, marque);
    this.wheelRadius = rayonRoues;
    this.peintType = typePeinture;
};

Velo.prototype = Object.create(Vehicule.prototype);
Velo.prototype.constructor = Velo

Velo.prototype.monter = () => console.log('Je monte sur mon vélo');

// part 3
/**
 * Voiture
 * @param couleur
 * @param roues
 * @param marque
 * @param assurance
 * @param proprietaire
 * @constructor
 */
const Voiture = function (couleur, roues, marque, assurance, proprietaire) {
    Vehicule.call(this, couleur, roues, marque);
    this.insurance = assurance;
    this.owner = proprietaire;
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;

Voiture.prototype.passerAuCarWash = () => console.log('La voiture passe au car wash')


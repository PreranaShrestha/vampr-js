class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let vampire = this;
    while(vampire.creator) {
      numberOfVampires++;
      vampire = vampire.creator;
    }
    return(numberOfVampires);
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let numberOfVampires1 = 0;
    let vampire1 = this;
    while(vampire1.creator) {
      numberOfVampires1++;
      vampire1 = vampire1.creator;
    }
    let numberOfVampires2 = 0;
    let vampire2 = vampire;
    while(vampire2.creator) {
      numberOfVampires2++;
      vampire2 = vampire2.creator;
    }
    if(numberOfVampires1 < numberOfVampires2){
      return true;
    } else {
      return false;
    }

  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
     if (this.name === name) {
      return this;
    } else {
      for (const offspring of this.offspring) {
        let vamp = offspring.vampireWithName(name);
        if (vamp) {
          return vamp;
        }
      }
    }
    return null;

  }

  // Returns the total number of vampires that exist


  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    var millennnialVampires = [];
    if(this.yearConverted > 1984) {
      millennnialVampires.push(this);
    }
      for(const offsp of this.offspring){
        const millennialVamp = offsp.allMillennialVampires;
        millennnialVampires = millennnialVampires.concat(millennialVamp);

      }
      console.log(millennnialVampires);
    return millennnialVampires;
  }
  get totalDescendents() {
    let totalDes = 0;

     totalDes = this.offspring.length;

    for (const offspr of this.offspring) {
      const totalOffspr = offspr.totalDescendents;
      totalDes = totalDes + totalOffspr;
    }

    return totalDes;
  }


  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let ancestors1 = [];
      let ancestors =[];
      let vampire1 = this;
      ancestors1.push(vampire);
      ancestors.push(vampire1);
      while(vampire.creator) {
        ancestors1.push(vampire.creator);
        vampire = vampire.creator;
      }
      while(vampire1.creator) {
        ancestors.push(vampire1.creator);
        vampire1 =vampire1.creator;
      }
      var commonAncestor = ancestors1.filter(function(val) {
       return ancestors.indexOf(val) != -1;
      });
      return commonAncestor[0];

  }
}

const original = new Vampire("Original", "1980");
const bart = new Vampire("Bart", "1981");
const ansel = new Vampire("Ansel", "1982");
original.addOffspring(bart);
original.addOffspring(ansel);


const elgort = new Vampire("Elgort", "1984");
const sarah = new Vampire("Sarah", "1985");
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);

const andrew = new Vampire("Andrew", "1990");
elgort.addOffspring(andrew);


console.log(original.totalDescendents);
// console.log(ansel.numberOfOffspring);


module.exports = Vampire;


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

  vampireWithName(name) {
    var vampireWithGivenName =[];
    if (this.name === name) {
      vampireWithGivenName.push(this);
    }
      for (const offsp of this.offspring) {
        const offspName = offsp.vampireWithName(name);
        vampireWithGivenName = vampireWithGivenName.concat(offspName);
    }
      return vampireWithGivenName;
  }


  get allMillennialVampires() {
    var millennnialVampires = [];
    if(this.yearConverted > 1980) {
      millennnialVampires.push(this);
    }
      for(const offsp of this.offspring){
        const millennialVamp = offsp.allMillennialVampires;
        millennnialVampires = millennnialVampires.concat(millennialVamp);

      }
    return millennnialVampires;

  }



  get totalDescendents() {
    var totalDes = [];
    totalDes.push(this);
      for(const offsp of this.offspring){
        const descendent = offsp.totalDescendents;
        totalDes= totalDes.concat(descendent);

      }
    return totalDes.length;
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
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
  //   let numberOfVampires1 = 0;
  //   let vampire1 = this;
  //   while(vampire1.creator) {
  //     numberOfVampires1++;
  //     vampire1 = vampire1.creator;
  //   }
  //   let numberOfVampires2 = 0;
  //   let vampire2 = vampire;
  //   while(vampire2.creator) {
  //     numberOfVampires2++;
  //     vampire2 = vampire2.creator;
  //   }
  //   if(numberOfVampires1 < numberOfVampires2){
  //     return vampire1;
  //   } else {
  //     return vampire2;
  //   }

  // }





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


console.log(original.vampireWithName("Andrew"));
// console.log(ansel.numberOfOffspring);


module.exports = Vampire;


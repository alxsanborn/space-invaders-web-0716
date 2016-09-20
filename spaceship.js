function Spaceship(name, crew=[], phasers, shields){
  this.name = name
  this.crew = crew;
    if (this.crew.length > 0) {
      for (var member = 0; member < this.crew.length; member ++){
        this.crew[member].currentShip = this;
      }
    }
  this.phasers = phasers
  this.shields = shields
  this.cloaked = false
  this.warpDrive = 'disengaged'
  this.docked = true;
    if (this.crew.length > 0) {
      this.docked = false;
    }
  this.phasersCharge = 'uncharged'
}

class Arena{
  constructor(name){
    this.gladiator = []
    this.name = capitalizeFirstLetter (name);
  }
  addGladiator (name){
    this.gladiator.push(name);
}
}

function capitalizeFirstLetter (inStr){
  return inStr.replace(/\w\S*/g, function (name2){
     return name2.charAt(0).toUpperCase() +name2.substr(1).toLowerCase();

   });
}

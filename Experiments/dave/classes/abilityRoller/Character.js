function Character(race){
  
  Character.test = "Hello";
  
  
  this.race = race;  

  Character.prototype.toString = function(){
    console.log(this.race);
  }
}
function racialBonuses(str, dex, con, intel, wis, chr){
    return {'strengthBonus':str, 'dexterityBonus':dex, 'constitutionBonus':con, 'intelligenceBonus':intel, 'wisdomBonus':wis, 'charismaBonus':chr};
}
Character.racialBonus = {'human': racialBonuses(0,0,0,0,0,0),
                         'dwarf': racialBonuses(0,0,2,0,0,-2),
                         'elf': racialBonuses(0,2,-2,0,0,0),
                         'gnome': racialBonuses(-2,0,2,0,0,0),
                         'half-elf': racialBonuses(0,0,0,0,0,0),
                         'half-orc': racialBonuses(2,0,0,-2,0,-2),
                         'halfling': racialBonuses(-2,2,0,0,0,0)};
var Monster = new Class({
	initialize: function(options){
		this.options = options; 
	}


	getStat: function(stat){
		switch(stat){
			case str:
				return stats[0];
			case dex:
				return stats[1];
			case con:
				return stats[2];
			case wis:
				return stats[3];
			case intel:
				return stats[4];
			case chr:
				return stats[5];
			default:
				return null;
		}	
	}

	getBonus: function(stat){
	switch(stat){
		case str:
			return (stats[0]-10)/2;
		case dex:
			return (stats[1]-10)/2;
		case con:
			return (stats[2]-10)/2;
		case wis:
			return (stats[3]-10)/2;
		case intel:
			return (stats[4]-10)/2;
		case chr:
			return (stats[5]-10)/2;
		default:
			return null;
	}	
}
})
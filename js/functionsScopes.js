function saveName(firstName) {
	var theCapitalizedName;

	function capitalizeName() {
		return firstName.toUpperCase();
	}

	theCapitalizedName = capitalizeName ();
	return theCapitalizedName;
}

console.log(saveName("Dong Hoon"));
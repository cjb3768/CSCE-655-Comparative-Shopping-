var FilterContext = function(object) {
	this.minPrice = "";
	this.maxPrice = "";
	this.brand = "";
	this.gpu = "";
    this.series = "";
	this.memory = "";
	this.manufacturer = "";
	this.hdmi="";
	this.displayport = "";
    this.dvi = "";

	if (object.hasOwnProperty('minPrice'))
		this.minPrice = object.minPrice;
	if (object.hasOwnProperty('maxPrice'))
	 	this.maxPrice = object.maxPrice;
    if (object.hasOwnProperty('brand'))
	 	this.brand = object.brand;
	if (object.hasOwnProperty('gpu'))
	 	this.gpu = object.gpu;
	if (object.hasOwnProperty('series'))
	 	this.series = object.series;
	if (object.hasOwnProperty('memory'))
		this.memory = object.memory;
    if (object.hasOwnProperty('manufacturer'))
	 	this.manufacturer = object.manufacturer;
	if (object.hasOwnProperty('hdmi'))
	 	this.hdmi = object.hdmi;
	if (object.hasOwnProperty('displayPort'))
	 	this.displayPort = object.displayPort;
	if (object.hasOwnProperty('dvi'))
		this.dvi = object.dvi;
}

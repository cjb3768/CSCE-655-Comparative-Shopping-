/*
	Before the page loads, we create a bsService object. Do not change the name - that will break stuff :(
		The arguments passed in are a list of strings. Each string is an extensionID. these particular ID's are
		for the released version of the IdeaMACHE plugin and for a secret, special version of the extension 
		that I have
	bsService will see if any of the extenions are availabe. If so it will use them. Otherwise, it will rely on the
		web-hosted version of bigsemantics

	 */

var bsService = new BSAutoSwitch(['elkanacmmmdgbnhdjopfdeafchmhecbf', 'gdgmmfgjalcpnakohgcfflgccamjoipd ']);



function viewComparison(){
    /*var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png";
    var imageDestination = document.getElementById("productListings").getElementById("productListing1").getElementById("productImage");
    imageDestination.src=imageUrl;*/
    //window.open("http://www.w3schools.com");
    
    //try to add a new productListing
    var destination = document.getElementById("productListings");
}

function runSearch(){
    
}
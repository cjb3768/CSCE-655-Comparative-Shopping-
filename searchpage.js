/*
	Before the page loads, we create a bsService object. Do not change the name - that will break stuff :(
		The arguments passed in are a list of strings. Each string is an extensionID. these particular ID's are
		for the released version of the IdeaMACHE plugin and for a secret, special version of the extension 
		that I have
	bsService will see if any of the extenions are availabe. If so it will use them. Otherwise, it will rely on the
		web-hosted version of bigsemantics

	 */

var bsService = new BSAutoSwitch(['elkanacmmmdgbnhdjopfdeafchmhecbf', 'gdgmmfgjalcpnakohgcfflgccamjoipd ']);

function updateImage(imageObject, newSrc, newAlt){
    imageObject.src=newSrc;
    imageObject.altText=newAlt;
}

function addImage(src, alt, imgClass){
    var newImg = document.createElement("img");
    newImg.src = src;
    newImg.alt = alt;
    newImg.classList.add(imgClass);
    return newImg;
}

function addButton(buttonClass, buttonText, onClickFunctionN

/*
    Add the purchase and compare buttons to a listing
*/
function addButtonBlock(){
    
}

function goToShopPage(shopPageUrl){
    window.open(shopPageUrl);
}

/*
    Adds item to comparison list (handled by cookies, need to do)
*/
function addItemToCompare(){
    
}

function addTextBlock(textClass, textBody){
    var newText = document.createElement("span");
    newText.classList.add(textClass);
    newText.innerHTML = textBody;
    return newText;
}

/* insert line breaks into long strings */
/*function formatText(unformattedText, lineLength){
    if (unformattedText.length > lineLength){
        var i = 0;
        while (i < unformmatedText.length){
            i++;
            if (i )
        }
    }
}
*/

function determineListingType(listingsBlock){
    var currentListings = listingsBlock.children;
    if (currentListings.length == 0){
        return "productListingType1";
    }
    else{
        //there are an even number of listings; add a type 1
        if (currentListings.length % 2 == 0){
            return "productListingType1";
        }
        //there are an odd number of listings; add a type 2
        else{
            return "productListingType2";
        }
    } 
}

/*
    Create a new item listing based on passed in information
*/
function createNewListing(productName, productURL, productDescription, productPrice, productImageSrc, productImageAlt){
    var listingsBlock = document.getElementById("productListings");
    var newListing = document.createElement("div");
    
    newListing.classList.add(determineListingType(listingsBlock));
    newListing.appendChild(addImage(productImageSrc, productImageAlt, "productListingImage"));
    newListing.appendChild(addTextBlock("productListingName", productName));
    newListing.appendChild(addTextBlock("productListingBodyText", productDescription));
    newListing.appendChild(addTextBlock("productListingPrice", productPrice));
    
    listingsBlock.appendChild(newListing);
}

function viewComparison(){
    /*var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png";
    var imageDestination = document.getElementById("productListings").getElementById("productListing1").getElementById("productImage");
    imageDestination.src=imageUrl;*/
    //window.open("http://www.w3schools.com");
    
    //try to edit a productListing
    /*
    var destination = document.getElementById("productListings");
    var children = destination.childNodes;
    for (i = 0; i < children.length; i++){
        if (children[i].className == "productListingType1"){
           var targetListingChildren = children[i].children;
           for (j = 0; j<targetListingChildren.length; j++)
              if (targetListingChildren[j].className == "productListingImage"){ updateImage(targetListingChildren[j],"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png", "a happy smile");
            }
        }
    }*/
    //try to add a new productListing
    var destination = document.getElementById("productListings");
    createNewListing("test1", "https://www.google.com", "It's a thing jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", "$ 100.00", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png", "smile!");
}

function runSearch(){
    
}
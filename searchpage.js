/*
	Before the page loads, we create a bsService object. Do not change the name - that will break stuff :(
		The arguments passed in are a list of strings. Each string is an extensionID. these particular ID's are
		for the released version of the IdeaMACHE plugin and for a secret, special version of the extension 
		that I have
	bsService will see if any of the extenions are availabe. If so it will use them. Otherwise, it will rely on the
		web-hosted version of bigsemantics

	 */

var bsService = new BSAutoSwitch(['elkanacmmmdgbnhdjopfdeafchmhecbf', 'gdgmmfgjalcpnakohgcfflgccamjoipd ']);

var productUrls = ["http://www.newegg.com/Product/Product.aspx?Item=N82E16814125516&cm_re=Gigabyte_AMD_Radeon_R7_240-_-14-125-516-_-Product", "http://www.amazon.com/Gigabyte-GDDR3-2GB-Graphics-GV-R724OC-2GI-REV2-0/dp/B00JRSPXMQ/ref=sr_1_1?ie=UTF8&qid=1457280904&sr=8-1&keywords=gpu"]

function onLoadSemantics(){
    /*
	Let's break down the arguments.
		-url: the URL you want metadata for
		-options: If you already have meta-metadata, you can pass it in here so prevent double extraction. 
		-callback: your function that will asynchronously recieve metadata
	*/

	var options = {};
    var url = productUrls[1];
	//var url = $("#youtubeOutput").attr('url');
	var callback = loadListingFromMetaMetadata;
	bsService.loadMetadata(url, options, callback);
}

function loadListingFromMetaMetadata(err, metadataAndMetametaData){
    var unwrappedMetadata = BSUtils.unwrap(metadataAndMetametaData.metadata);
    //Before using the data, i kill off my loading indicator
	$('.loadingImage').remove();
    
    try{
        createNewListing("test product", productUrls[1], "a graphics card","$5.00",unwrappedMetadata.pic, "an image");
    }
    catch(e){
        createNewListing("Invalid Product", "", "No product information available", "$ n/a", "./errorImage", "No image available");
        }
}

function updateImage(imageObject, newSrc, newAlt){
    imageObject.src=newSrc;
    imageObject.altText=newAlt;
}

//function addFilter(filterClass, )

function addImage(src, alt, imgClass){
    var newImg = document.createElement("img");
    newImg.src = src;
    newImg.alt = alt;
    newImg.classList.add(imgClass);
    return newImg;
}

function addButton(buttonClass, buttonText){
    var newButton = document.createElement("button");
    newButton.classList.add(buttonClass);
    newButton.innerHTML = buttonText;
    return newButton;
}
/*
    Add the purchase and compare buttons to a listing
*/
function addButtonBlock(buttonBlockClass, productUrl){
    var buttonBlock = document.createElement("div");
    buttonBlock.classList.add(buttonBlockClass);
    var purchaseButton = addButton("productListingPurchaseButton", "Buy Product");
    purchaseButton.onclick = function(){goToShopPage(productUrl)};
    var compareButton = addButton("productListingCompareButton", "Add to Compare");
    compareButton.onclick = function(){addItemToCompare()};
    
    buttonBlock.appendChild(purchaseButton);
    buttonBlock.appendChild(compareButton);
    return buttonBlock;
}

function goToShopPage(shopPageUrl){
    window.open(shopPageUrl);
    console.log("purchaseButtonPressed!");
}

/*
    Adds item to comparison list (handled by cookies, need to do)
*/
function addItemToCompare(){
    console.log("add to compare button pressed!")
}

function addTextBlock(textClass, textBody){
    var newText = document.createElement("span");
    newText.classList.add(textClass);
    newText.innerHTML = textBody;
    return newText;
}

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
function createNewListing(productName, productUrl, productDescription, productPrice, productImageSrc, productImageAlt){
    var listingsBlock = document.getElementById("productListings");
    var newListing = document.createElement("div");
    
    newListing.classList.add(determineListingType(listingsBlock));
    newListing.appendChild(addImage(productImageSrc, productImageAlt, "productListingImage"));
    newListing.appendChild(addTextBlock("productListingName", productName));
    newListing.appendChild(addTextBlock("productListingBodyText", productDescription));
    newListing.appendChild(addTextBlock("productListingPrice", productPrice));
    newListing.appendChild(addButtonBlock("productListingButtonBlock", productUrl));
    
    listingsBlock.appendChild(newListing);
}

function viewComparison(){
    /*var imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png";
    var imageDestination = document.getElementById("productListings").getElementById("productListing1").getElementById("productImage");
    imageDestination.src=imageUrl;*/
    
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
    createNewListing("test1", "https://www.google.com", "It's a thing", "$ 100.00", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/2000px-Smiley.svg.png", "smile!");
}


/*
function compileFilters(filtersToAdd){
    for (i = 0; i < filtersToAdd.length; i++){
        
    }
}
*/
function updateSearchFilters(){
    
}

function runSearch(){
    
}
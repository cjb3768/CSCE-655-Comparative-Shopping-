/*
	Before the page loads, we create a bsService object. Do not change the name - that will break stuff :(
		The arguments passed in are a list of strings. Each string is an extensionID. these particular ID's are
		for the released version of the IdeaMACHE plugin and for a secret, special version of the extension 
		that I have
	bsService will see if any of the extenions are availabe. If so it will use them. Otherwise, it will rely on the
		web-hosted version of bigsemantics

	 */
/*
var bsService = new BSAutoSwitch(['elkanacmmmdgbnhdjopfdeafchmhecbf', 'gdgmmfgjalcpnakohgcfflgccamjoipd ']);

var productData = new Firebase("https://greenpu.firebaseio.com/ProductMetadata");

var productArray = new Array();

var compareList = new Firebase("https://greenpu.firebaseio.com/ComparisonList");

// Attach an asynchronous callback to read the data at our posts reference
productData.on("value", function(snapshot) {
  console.log(snapshot.val());
  productArray = snapshot.val();
    console.log ("productArray contains" + snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
*/
function getAmazonData(object){
    product = new Array();
    
    product.price = "Cannot Find Price";
    product.imageSource = "testImage.jpg";
    product.sourcePage = "www.amazon.com";
    product.name = "No name available";
    product.description = "No description available";
    
    
    if (object.hasOwnProperty("price")){
        product.price = object.price;
    }
    if (object.hasOwnProperty("title")){
        product.name = object.title;
    }
    if (object.hasOwnProperty("location")){
        product.sourcePage = object.location;
    }
    if (object.hasOwnProperty("main_images")){
        product.imageSource = object.main_images[0].location;
    }
    if (object.hasOwnProperty("description")){
        product.description = object.description;
    }
    
    strippedProductArray.push(product);
    
    return product;
}

function getNeweggData(object){
    product = new Array();
    
    product.price = "Cannot Find Price";
    product.imageSource = "testImage.jpg";
    product.sourcePage = "www.newegg.com";
    product.name = "No name available";
    product.description = "No description available";
    product.specifications = new Array();
    
    if (object.hasOwnProperty("price")){
        product.price = object.price;
    }
    if (object.hasOwnProperty("title")){
        product.name = object.title;
    }
    if (object.hasOwnProperty("location")){
        product.sourcePage = object.location;
    }
    if (object.hasOwnProperty("main_images")){
        product.imageSource = object.main_images[0].location;
    }
    if (object.hasOwnProperty("description")){
        product.description = object.description;
    }
    
    strippedProductArray.push(product);
    
    return product;
}

function compressSpecificationTable(object){
    
}

function onLoadSemantics(){
    /*
	Let's break down the arguments.
		-url: the URL you want metadata for
		-options: If you already have meta-metadata, you can pass it in here so prevent double extraction. 
		-callback: your function that will asynchronously recieve metadata
	*/
    /*
	var options = {};
    var url = "http://www.newegg.com/Product/Product.aspx?Item=N82E16814202185";
	//var url = $("#youtubeOutput").attr('url');
	var callback = loadListingFromMetaMetadata;
	bsService.loadMetadata(url, options, callback);
    */
    //access json file
    //attempt to create a file from each child in productData
    
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

function loadListings(productArray){
    for(var i = 0; i < productArray.length; i++){
        var productID = i;
        if (productArray[i].hasOwnProperty("amazon_product")){
            var prod = getAmazonData(productArray[i].amazon_product);
           
            createNewListing(product.name, product.sourcePage, product.description, product.price, product.imageSource, product.name, productID);
        }
        else if (productArray[i].hasOwnProperty("newegg_product")){
            var prod = getNeweggData(productArray[i].newegg_product);
           
            createNewListing(product.name, product.sourcePage, product.description, product.price, product.imageSource, product.name, productID);
        }
       //spawnListing();
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
    compareButton.onclick = function(){addItemToCompare(this)};
    
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
function addItemToCompare(el){
    console.log("add to compare button pressed!")
   var listingID = el.parentNode.parentNode.id;
    
    console.log(listingID);
    console.log(strippedProductArray[listingID]);
    addUniqueItemToCompareList(strippedProductArray[listingID]);
  //var newCompareListItem = compareList.push();
   
  // var newCompareListItem = compareList.child(strippedProductArray[listingID].name);
    //newCompareListItem.set(strippedProductArray[listingID]); //console.log(productArray[listingID]);
    //compareList
}

function addUniqueItemToCompareList(object){
    var duplicateExists = false;
    for (var i = 0; i < compareList.length; i++){
        if (compareList[i] == object){
            duplicateExists = true;
        }
    }
    if (!duplicateExists){
        var newCompareListItem = compareList.push();
        newCompareListItem.set(object);
    }
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
function createNewListing(productName, productUrl, productDescription, productPrice, productImageSrc, productImageAlt, domID){
    var listingsBlock = document.getElementById("productListings");
    var newListing = document.createElement("productListing");
    
    newListing.id = domID;
    newListing.classList.add(determineListingType(listingsBlock));
    newListing.appendChild(addImage(productImageSrc, productImageAlt, "productListingImage"));
    newListing.appendChild(addTextBlock("productListingName", productName));
    newListing.appendChild(addTextBlock("productListingBodyText", productDescription));
    newListing.appendChild(addTextBlock("productListingPrice", productPrice));
    newListing.appendChild(addButtonBlock("productListingButtonBlock", productUrl));
    
    listingsBlock.appendChild(newListing);
}

function viewComparison(){
    window.open("./comparepage.html")
}

function spawnListing(){
    //try to add a new productListing
    //var destination = document.getElementById("productListings");
    createNewListing("Product Listing Spawning Test", "https://www.google.com", "Product Description Here", "$ 100.00", "testImage.jpg", "A GPU");
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
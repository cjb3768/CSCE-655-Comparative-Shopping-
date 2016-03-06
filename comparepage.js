/*
	Before the page loads, we create a bsService object. Do not change the name - that will break stuff :(
		The arguments passed in are a list of strings. Each string is an extensionID. these particular ID's are
		for the released version of the IdeaMACHE plugin and for a secret, special version of the extension 
		that I have
	bsService will see if any of the extenions are availabe. If so it will use them. Otherwise, it will rely on the
		web-hosted version of bigsemantics

	 */

var bsService = new BSAutoSwitch(['elkanacmmmdgbnhdjopfdeafchmhecbf', 'gdgmmfgjalcpnakohgcfflgccamjoipd ']);

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
        
    }
    catch(e){
        
        }
}

function createSpecificationBlock{
    
}
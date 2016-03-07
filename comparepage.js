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
    //var url = productUrls[1];
	var url = $("#youtubeOutput").attr('url');
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

function determineSpecificationType(specColumn, columnType1, columnType2){
    var currentSpecs = specColumn.children;
    if (currentSpecs.length == 3){
        //currently there are no specification blocks in the column
        return columnType2;
    }
    else{
        if (currentSpecs.length % 2 == 0){
            return columnType1;
        }
        else{
            return columnType2;
        }
    }
}

function addSpecificationBlockText(specificationText, textClass){
    var specText = document.createElement("div");
    specText.classList.add(textClass);
    specText.innerHTML = specificationText;
    return specText;
}

function createSpecificationBlock(specificationColumn, specificationText){
    var specColumn = document.getElementById(specificationColumn);
    var newSpec = document.createElement("div");
    newSpec.classList.add(determineSpecificationType(specColumn,"productCompareSpecificationBlock1", "productCompareSpecificationBlock2"));
    
    if (newSpec.class == "productCompareSpecificationBlock1"){
        var topDivider1 = document.createElement("div");
        topDivider1.classList.add("dividerTop1")
        var bottomDivider1 = document.createElement("div");
        bottomDivider1.classList.add("dividerBottom1");
        newSpec.appendChild(topDivider1);
        newSpec.appendChild(bottomDivider1);
    }
    else{
        var topDivider2 = document.createElement("div");
        topDivider2.classList.add("dividerTop2")
        var bottomDivider2 = document.createElement("div");
        bottomDivider2.classList.add("dividerBottom2");
        newSpec.appendChild(topDivider2);
        newSpec.appendChild(bottomDivider2);
    }
    
    newSpec.appendChild(addSpecificationBlockText(specificationText, "productCompareSpecificationText"));
    return newSpec;
}

function createSpecificationChartBlock(specificationName, specificationDescription){
    var specList = document.getElementById("specificationList");
    var newSpec = document.createElement("div");
    
    newSpec.classList.add(determineSpecificationType(specList, "chartSpecificationEntryBlock1","chartSpecificationEntryBlock2"));
    
    if (newSpec.class == "chartSpecificationEntryBlock1"){
        var topDivider1 = document.createElement("div");
        topDivider1.classList.add("dividerTop1")
        var bottomDivider1 = document.createElement("div");
        bottomDivider1.classList.add("dividerBottom1");
        newSpec.appendChild(topDivider1);
        newSpec.appendChild(bottomDivider1);
    }
    else{
        var topDivider2 = document.createElement("div");
        topDivider2.classList.add("dividerTop2")
        var bottomDivider2 = document.createElement("div");
        bottomDivider2.classList.add("dividerBottom2");
        newSpec.appendChild(topDivider2);
        newSpec.appendChild(bottomDivider2);
    }
    
    newSpec.appendChild(addSpecificationBlockText(specificationName, "chartSpecificationNameText"));
    newSpec.appendChild(addSpecificationBlockText(specificationDescription, "chartSpecificationBodyText"));
    
    return newSpec;
    
}

function addSpecificationRow(specificationName, specificationDescription, col1Spec, col2Spec, col3Spec, col4Spec, col5Spec, col6Spec){
    var specCol = document.getElementById("specificationList");
    var col1 = document.getElementById("compareColumn1");
    var col2 = document.getElementById("compareColumn2");
    var col3 = document.getElementById("compareColumn3");
    var col4 = document.getElementById("compareColumn4");
    var col5 = document.getElementById("compareColumn5");
    var col6 = document.getElementById("compareColumn6");
    
    specCol.appendChild(createSpecificationChartBlock(specificationName, specificationDescription));
    col1.appendChild(createSpecificationBlock("compareColumn1",  col1Spec));
    col2.appendChild(createSpecificationBlock("compareColumn2", col2Spec));
    col3.appendChild(createSpecificationBlock("compareColumn3", col3Spec));
    col4.appendChild(createSpecificationBlock("compareColumn4", col4Spec));
    col5.appendChild(createSpecificationBlock("compareColumn5", col5Spec));
    col6.appendChild(createSpecificationBlock("compareColumn6", col6Spec));
}

function addSpecRow(){
    //add example spec row to chart.
    
    addSpecificationRow("spec name", "spec desc", "test value", "test value", "test value", "test value", "test value", "test value");
}

function viewSearchPage(){
    window.open("./searchpage.html");
}
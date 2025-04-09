var options = ["Choose", "CocaCola", "Fanta", "7Up", "Dr.Pepper"];
var logoImage = ["https://rb.gy/awc4pg","https://rb.gy/wznllr","https://rb.gy/wfvvuz","https://rb.gy/bxkfni"];

var facts = [140+"calories\n"+39+"g Sugar\n"+0+"mg aspartame\n",0+"Calories\n"+0+"g Sugar\n"+188+"mg aspartame\n", 0+"Calories\n"+0+"g Sugar\n"+87+"mg aspartame\n",160+"calories\n"+44+"g Sugar\n"+0+"mg aspartame\n","N/A",0+"calories\n"+0+"g Sugar\n"+0+"mg aspartame\n"];
//the next three lists are specifics of the list above only containing the numerical values for easier accessibility and use in operations
var calories = [140,0,0,160,"N/A",0,165,0,0,130,0,0];
var sugar = [39,0,0,44,"N/A",0,47,0,0,26,0,0];
var aspartame = [0,188,87,0,"N/A",118,0,N/A,N/A,0,133,64];
var types = ["Choose", "classic", "diet", "zero"];
//Overview of options and types: CocaCola(classic,diet,zero), Fanta(Classic,Zero), 7Up(classic,diet,zero), Dr.Pepper(classic,diet,zero)

var typeImage = ["https://rb.gy/qldcf5","https://rb.gy/gynywm","https://rb.gy/72mhfl","https://rb.gy/3fp537","https://rb.gy/we36tc","https://rb.gy/hicflk","https://rb.gy/nckgpb","https://rb.gy/ikt4b6","https://rb.gy/rlor5e","https://rb.gy/xxhnpf","https://rb.gy/4zp53v","https://rb.gy/be1tdx"];

setProperty("dropdown1","options", options);
setProperty("dropdown2", "options", options);
setProperty("dropdown1b", "options", types);
setProperty("dropdown2b", "options", types);

var placeHolder;
var imageIndex;
var totalIndex=[];
onEvent("dropdown1", "change", function( ){
  placeHolder = "1";
  imageIndex = findLogoIndex(getText("dropdown1"));
  setImageURL("image1", logoImage[imageIndex]);
});
onEvent("dropdown2", "change", function( ){
  placeHolder = "2";
  imageIndex = findLogoIndex(getText("dropdown2"));
  setImageURL("image2", logoImage[imageIndex]);
  
});
onEvent("dropdown1b","change", function( ){
  placeHolder = "3";
  imageIndex = findImageIndex(getText("dropdown1"),getText("dropdown1b"));
  insertItem(totalIndex,0,imageIndex);
  setImageURL("image"+placeHolder/3, typeImage[imageIndex]);
});
onEvent("dropdown2b","change", function ( ){
  placeHolder = "6";
  imageIndex = findImageIndex(getText("dropdown2"),getText("dropdown2b"));
  insertItem(totalIndex,1,imageIndex);
  setImageURL("image"+placeHolder/3, typeImage[imageIndex]);
});
onEvent("compareButton","click", function ( ){//greater/less/equal in terms of sugar/caffeine/size
  setScreen("screen2");
  setText("text_area1",facts[totalIndex[0]]);
  setText("text_area2",facts[totalIndex[1]]);
  var compareResult = compare(totalIndex,getText("dropdown1b"),getText("dropdown1"),getText("dropdown2b"),getText("dropdown2"));
  setText("text_area3",compareResult.join("\n"));
});


function findLogoIndex(choice){
  for(var i=0;i<options.length;i++){
    if(choice == options[i]){
      return(i-1);
}}}

function findImageIndex(choice,type){
  for(var i=0;i<typeImage.length;i++){
    if(choice==options[i]){
      for(var a=0;i<typeImage.length;a++){
        if(type==types[a]){
          return((((i*3)-3)+a)-1);
}}}}}


function compare(indexes,type1,choice1,type2,choice2){
  var textdisplay = [];
  var outcome = [type1+" "+choice1+" has more ", type2+" "+choice2+" has more "];
  if(calories[indexes[0]]==calories[indexes[1]]){
    appendItem(textdisplay,"Same number of calories");
  }else if(calories[indexes[0]]>calories[indexes[1]]){ 
    appendItem(textdisplay,outcome[0] + "calories");
  }else{
    appendItem(textdisplay,outcome[1]+"calories");
}
  if(sugar[indexes[0]]==sugar[indexes[1]]){
    appendItem(textdisplay,"Same amount of sugar");
  }else if(sugar[indexes[0]]>sugar[indexes[1]]){
    appendItem(textdisplay,outcome[0]+"sugar");
    }else{
    appendItem(textdisplay,outcome[1]+"sugar");
  }
  if(aspartame[indexes[0]]==aspartame[indexes[1]]){
    appendItem(textdisplay,"same amount of aspartame(artificial sweetner)");
  }else if(aspartame[indexes[0]]>aspartame[indexes[1]]){
    appendItem(textdisplay,outcome[0]+"aspartame(artificial sweetner)");
  }else{
    appendItem(textdisplay,outcome[1]+"aspartame(artificial sweetner)");
} 
return textdisplay;
}


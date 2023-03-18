var set =0
var DarkMode;
//localStorage.setItem("Mode","0")
function darkTheme(){

    // window.localStorage.setItem(DarkMode,"1");
    //var x = document.getElementsByTagName("body")[0].setAttribute("--bck-color-body","white");
    //var x = document.getElementsByTagName("body")[0].setAttribute(--bck-color-body,"white");
    // console.log(DarkMode)
    let root = document.documentElement;  
    if(set==0){
       
        root.style.setProperty("--bck-color-body","black")
        root.style.setProperty("--bck-color-nav","white")
        root.style.setProperty("--fnt-color-nav","black")
        root.style.setProperty("--crd-fnt-color","black")
        set=1
        window.localStorage.setItem("Mode","1")
        //document.getElementById('modeButton')
    }else{
        root.style.setProperty("--bck-color-body","lightyellow")
        root.style.setProperty("--bck-color-nav","#352d2f")
        root.style.setProperty("--fnt-color-nav","white")
        root.style.setProperty("--crd-fnt-color","lightyellow")
        set=0
        window.localStorage.setItem("Mode","0")
    }
        
        // document.getElementById("modeButton").value="Close Curtain"; 
        //--crd-fnt-color
        // --bck-color-body :lightyellow;
        // --bck-color-nav : #352d2f;
        // --fnt-color-nav : white;
        // --crd-fnt-color : lightyellow;
   
    // --fnt-color-nav
    //alert("hello");


}
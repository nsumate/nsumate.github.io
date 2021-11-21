let names=["Nancy","Ananya","Jeh","Sara","john"];
// console.log(name);
for(let i=0;i<names.length;i++){
    if(names[i].charAt(0)=='J'||names[i].charAt(0)==='j'){
        console.log("Goodbye "+names[i]);
    }
    else{
        console.log("Hello "+names[i]);
    }
}
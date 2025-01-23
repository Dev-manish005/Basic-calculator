const inp=document.getElementById("inputVal");
const sub=document.getElementById("subVal");
const His=document.getElementById("subHis");

function getValue(val){
    if(inp.value!=0)
        inp.value+=val;
    else
        inp.value=val;
    
}
function clearAll(){
    inp.value="0";
    sub.value="";
}
function clearSD(){
    if(inp.value.length>1)
        inp.value=inp.value.slice(0,-1);
    else{
        inp.value=inp.value.slice(0,-1);
        inp.value="0";
    }
}
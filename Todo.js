var inputext=document.getElementById('input');
var ullist=document.getElementById('ullist');
function fclick(){
    const addtask=inputext.value.trim();
    if (addtask!==""){
        const listitem=document.createElement('li')
        listitem.innerHTML=
            `<span>${addtask}</span>
            <button onclick="delet(this)" id="smallbtn">delete</button>`
        ullist.appendChild(listitem)
        inputext.value="";
        var s=document.getElementById('smallbtn')
        s.style.background="blue";
        s.style.color="white";
        s.style.border="solid 2px yellow";
        s.style.borderRadius="3px";
    }

}
function delet(button){
    var listitem=button.parentElement;
    ullist.removeChild(listitem);
}


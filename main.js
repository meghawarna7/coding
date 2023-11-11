
let text1=document.getElementById("number");
let text2=document.getElementById("msg");
let text3=document.getElementById("pre");
let text4=document.getElementById("dic");
let count=0;
function increment(){

count+=1;
text2.innerText="clicked !!!";
text1.innerText=count;

}
function save(){
let countstr=count+ " "
text3.textContent+=countstr;
text1.textContent=0;
count=0;
}
function dicrement(){
    count-=1;
    text1.innerText=count;
}

const q1=document.getElementById("q1");
const q2=document.getElementById("q2");
const q3=document.getElementById("q3");
const q4=document.getElementById("q4");
const q5=document.getElementById("q5");
const q6=document.getElementById("q6");
const a1=document.getElementById("a1");
const a2=document.getElementById("a2");
const a3=document.getElementById("a3");
const a4=document.getElementById("a4");
const a5=document.getElementById("a5");
const a6=document.getElementById("a6");

let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;
q1.onclick=function(){
    if(count1===0){

        document.getElementById("q1-plus").innerHTML=`<span class="material-symbols-outlined">
    close
    </span>`
    count1=1;
    }
    else{
        document.getElementById("q1-plus").innerHTML=`<span class="material-symbols-outlined">
                        add
                        </span>`
    count1=0;
    }
    a1.classList.toggle("hidden");
}
q2.onclick=function(){
    if(count2===0){

        document.getElementById("q2-plus").innerHTML=`<span class="material-symbols-outlined">
    close
    </span>`
    count2=1;
    }
    else{
        document.getElementById("q2-plus").innerHTML=`<span class="material-symbols-outlined">
                        add
                        </span>`
    count2=0;
    }
    a2.classList.toggle("hidden");
}
q3.onclick=function(){
    if(count3===0){

        document.getElementById("q3-plus").innerHTML=`<span class="material-symbols-outlined">
    close
    </span>`
    count3=1;
    }
    else{
        document.getElementById("q3-plus").innerHTML=`<span class="material-symbols-outlined">
                        add
                        </span>`
    count3=0;
    }
    a3.classList.toggle("hidden");
}
q4.onclick=function(){
    if(count4===0){

        document.getElementById("q4-plus").innerHTML=`<span class="material-symbols-outlined">
    close
    </span>`
    count4=1;
    }
    else{
        document.getElementById("q4-plus").innerHTML=`<span class="material-symbols-outlined">
                        add
                        </span>`
    count4=0;
    }
    a4.classList.toggle("hidden");
}
q5.onclick=function(){
    if(count5===0){

        document.getElementById("q5-plus").innerHTML=`<span class="material-symbols-outlined">
    close
    </span>`
    count5=5;
    }
    else{
        document.getElementById("q5-plus").innerHTML=`<span class="material-symbols-outlined">
                        add
                        </span>`
    count5=0;
    }
    a5.classList.toggle("hidden");
}
q6.onclick=function(){
    if(count6===0){

        document.getElementById("q6-plus").innerHTML=`<span class="material-symbols-outlined">
    close
    </span>`
    count6=1;
    }
    else{
        document.getElementById("q6-plus").innerHTML=`<span class="material-symbols-outlined">
                        add
                        </span>`
    count6=0;
    }
    a6.classList.toggle("hidden");
}
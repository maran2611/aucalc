function p1(){
    var t1=document.getElementById("s1").value;
    var t2=document.getElementById("s2").value;
    var t3=document.getElementById("s3").value;
    var t4=document.getElementById("s4").value;
    var t5=document.getElementById("s5").value;
    var t6=document.getElementById("s6").value;
    var t7=document.getElementById("s7").value;
    var t8=document.getElementById("s8").value;
    var c1=document.getElementById("cr1").value;
    var c2=document.getElementById("cr2").value;
    var c3=document.getElementById("cr3").value;
    var c4=document.getElementById("cr4").value;
    var c5=document.getElementById("cr5").value;
    var c6=document.getElementById("cr6").value;
    var c7=document.getElementById("cr7").value;
    var c8=document.getElementById("cr8").value;
    var a,b,c,d,e,f,g,h,a1,a2,sum;
   if(t1>0 & t2>0 & t3>0 & t4>0 & t5>0 & t6>0 & t7>0 & t8>0 & c1>0 & c2>0 & c3>0 & c4>0 & c5>0 & c6>0 & c7>0 & c8>0){
     a=t1*c1;
     b=t2*c2;
     c=t3*c3;
     d=t4*c4;
     e=t5*c5;
     f=t6*c6;
     g=t7*c7;
     h=t8*c8;
     a1=parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d)+parseFloat(e)+parseFloat(f)+parseFloat(g)+parseFloat(h);
     a2=parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5) + parseInt(c6) + parseInt(c7) + parseInt(c8);
     sum=(a1/a2);
     document.getElementById("result2").innerHTML=sum; 
   }
   else if(t1>0 & t2>0 & t3>0 & t4>0 & t5>0 & t6>0 & t7>0  & c1>0 & c2>0 & c3>0 & c4>0 & c5>0 & c6>0 & c7>0){
     a=t1*c1;
     b=t2*c2;
     c=t3*c3;
     d=t4*c4;
     e=t5*c5;
     f=t6*c6;
     g=t7*c7;  
     a1=parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d)+parseFloat(e)+parseFloat(f)+parseFloat(g);
     a2=parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5) + parseInt(c6) + parseInt(c7);
     sum=(a1/a2);
     document.getElementById("result2").innerHTML=sum;
    }
    else if(t1>0 & t2>0 & t3>0 & t4>0 & t5>0 & t6>0 & c1>0 & c2>0 & c3>0 & c4>0 & c5>0 & c6>0){
        a=t1*c1;
        b=t2*c2;
        c=t3*c3;
        d=t4*c4;
        e=t5*c5;
        f=t6*c6; 
        a1=parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d)+parseFloat(e)+parseFloat(f);  
        a2=parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5) + parseInt(c6);
        sum=(a1/a2);
        document.getElementById("result2").innerHTML=sum;
    }
    else if(t1>0 & t2>0 & t3>0 & t4>0 & t5>0 & c1>0 & c2>0 & c3>0 & c4>0 & c5>0){
        a=t1*c1;
        b=t2*c2;
        c=t3*c3;
        d=t4*c4;
        e=t5*c5;  
        a1=parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d)+parseFloat(e); 
        a2=parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4) + parseInt(c5);
        sum=(a1/a2);
        document.getElementById("result2").innerHTML=sum;
    }
    else if(t1>0 & t2>0 & t3>0 & t4>0 & c1>0 & c2>0 & c3>0 & c4>0){
        a=t1*c1;
        b=t2*c2;
        c=t3*c3;
        d=t4*c4;
        a1=parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d);
        a2=parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4);
        sum=(a1/a2);
        document.getElementById("result2").innerHTML=sum;
    }
    else if(t1>0 & t2>0 & t3>0 & c1>0 & c2>0 & c3>0){
        a=t1*c1;
        b=t2*c2;
        c=t3*c3;  
        a1=parseFloat(a)+parseFloat(b)+parseFloat(c);
        a2=parseInt(c1) + parseInt(c2) + parseInt(c3);
        sum=(a1/a2);
        document.getElementById("result2").innerHTML=sum;
    }
    else if(t1>0 & t2>0 & c1>0 & c2>0){
        a=t1*c1;
        b=t2*c2;
        a1=parseFloat(a)+parseFloat(b);
        a2=parseInt(c1) + parseInt(c2);
        sum=(a1/a2);
        document.getElementById("result2").innerHTML=sum;
    } 
}
function c1(){
    document.getElementById('cgpa').style.display = "none";}
function opn(){
    document.getElementById('cgpa').style.display = "block";}
function resu(){
    document.getElementById("re").style.display="block";

}
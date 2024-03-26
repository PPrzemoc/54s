var drewno = 0;
var gendrewno = 10;
var deski = 0;
var gendeski=0;
var wengile =0;
var genwengiel = 0;
var zelaza = 0;
var genzelaza = 0;
var stal=0;
var zaphut =1;
var gilna=0;
var cegly=0;
var gengilna=0;
var liglin=0;
var liceg=0;
var zapceg=1;
var genstal=1;
var belastal =0;
var genbelstal=0;


function pdre(){
   if(drewno!==0){
   drewno= drewno -1;
   deski=deski+1;
   document.getElementById("des").innerHTML= "desek: "+deski;
   document.getElementById("dre").innerHTML= "Drewno: "+drewno;

}
}//przemiana desek
var poj =0;
var cenat=10;
function btartak(){
   if(drewno==cenat || drewno>cenat)//kupno taraku
   {
   if(poj==0)
   {
      var br = document.createElement("br")
   var button = document.createElement("button");

         console.log(drewno-cenat);
         drewno=drewno-cenat;
        cenat=cenat+1;
   var tekst = document.createTextNode("zamieni drewno na deski");
   button.onclick = function zades() 
   {
      pdre();
    };
   button.appendChild(tekst);
   document.getElementById("content").appendChild(button);
   document.getElementById("content").appendChild(br);
poj=poj+1;
document.getElementById("dre").innerHTML= "Drewno: "+drewno;
document.getElementById("kupt").innerHTML= "Kup Tartak automatyczny tartak cena: " +cenat+" derwna";

    } 
    else //kupno ulepszenia
   {
      drewno=drewno-cenat;
      cenat=cenat+1;
      gendeski=gendeski+1;
      poj=poj+1;
      document.getElementById("dre").innerHTML= "Drewno: "+drewno;
      document.getElementById("des").innerHTML= "Desek: "+deski;
      document.getElementById("kupt").innerHTML= "Kup Tartak automatyczny tartak cena: " +cenat+" drewna";
      console.log(gendeski);
   }
}
   }  //kupno tartaku i jego automatyzacji

var cenob =10;
function od(){
   if(deski==cenob || deski>cenob)
   {
      deski=deski-cenob;
gendrewno=gendrewno+1;
cenob=cenob+1;
document.getElementById("kupod").innerHTML = "Kup Obuz drwali cena:" +cenob+" desek";


document.getElementById("des").innerHTML= "Desek: "+deski;
   }

}// kupno obozu drawli 
cenwen=20;
function kopwengla(){
if(deski == cenwen || deski > cenwen){
   deski = deski-cenwen;
   
document.getElementById("des").innerHTML= "Desek: "+deski;
genwengiel=genwengiel+1;
console.log(genwengiel);
cenwen=cenwen+1;
document.getElementById("wen").innerHTML= "wegiel: "+wengile;
document.getElementById("kuwen").innerHTML="ulepszenie kopalni węgla cena:"+cenwen+" desek";
}
}//ulepszenie koplni węgla
function dodawaniedes(){
deski=deski+ 1000;
stal=stal+2137;
document.getElementById("des").innerHTML="Desek: "+deski;
document.getElementById("sta").innerHTML="stal:"+stal;
}
var cenzel =20;
function kopzelaza(){
   if(deski == cenzel || deski > cenzel){
      deski = deski-cenzel;
      cenzel= cenzel+1;
   document.getElementById("des").innerHTML= "Desek: "+deski;
   genzelaza=genzelaza+1;
   console.log(genzelaza);
 
   document.getElementById("zel").innerHTML= "żelaz: "+zelaza;
   document.getElementById("kuzel").innerHTML="ulepszenie kopalni żelaza cena:"+cenzel+" desek";
}}//ulepszanie kopalni żelza
var cenhut = 40;
function huta(){
if(cegly== cenhut ||cegly > cenhut ){
  cegly = cegly-cenzel;
      
   document.getElementById("ceg").innerHTML= "Cegły: "+cegly;
   genstal=genstal+1;
   console.log(genstal);
   cenhut=cenhut+10;

   document.getElementById("kuhut").innerHTML="ulepszenie huty cena:"+cenhut+"cegieł";

}
}//ulepszenie huty
var cengli= 40;
function glina(){
   if(deski==cengli || deski>cengli){
        deski=deski-cengli; 
        gengilna= gengilna+1;
      cengli=cengli+5;
      document.getElementById("des").innerHTML= "Desek: "+deski;
      document.getElementById("kugil").innerHTML="ulepszenie kopalni gliny cena:" + cengli + " desek";
   }
}//kopalnia gliny
var cenceg=50;
function cegielnia(){
   if(deski==cenceg || deski>cenceg){
     deski=deski-cenceg; 
     zapceg=zapceg+1;
      cenceg=cenceg+10;
      document.getElementById("des").innerHTML= "Desek: "+deski;
      document.getElementById("kuceg").innerHTML="ulepszenie cegielni cena:"+cenceg+" desek";
   }
}
var cenfab=100;
function fabrykadzie(){
if(cegly==cenfab || cegly >cenfab)
cegly==cegly-cenfab;
cenfab=cenfab+20;
document.getElementById("ceg").innerHTML= "Cegły: "+cegly;
document.getElementById("kufab").innerHTML="ulepszeniefabryki cena:"+cenzel+" cegieł";

}

var lihut = 0;
var lizel =0;
var liwen=0;
var lifab=0;
function wczyt(){

setInterval(function ddre() {
   drewno=drewno+gendrewno;
   document.getElementById("dre").innerHTML= "Drewno: "+drewno;
}, 5000); //generowanie drewna


setInterval(function ddes() {
   deski = deski+gendeski; 
   if(deski!==0 )
   {       
      if(drewno>0)//test czy ma drewno na deski
   {
      
    drewno=drewno-gendeski;
      deski=deski+gendeski;
      document.getElementById("dre").innerHTML= "Drewno: "+drewno;
   } 
   document.getElementById("des").innerHTML= "Desek: "+deski;

}}, 10000); //generowanie desek
setInterval(function wengla() {
   if(liwen ==0){
   if(deski==100 || deski >100 )//tworzenie kopalni węgla
{  var br1 = document.createElement("br")
   liwen=liwen+1;
   var button1 = document.createElement("button");
   var tekst1 = document.createTextNode("ulepszenie kopalni węgla cena:"+cenwen+" desek");

   button1.onclick = function zawen() 
   {
      kopwengla();
    };
    button1.setAttribute("id", "kuwen");
   button1.appendChild(tekst1);
   document.getElementById("content").appendChild(button1);
   document.getElementById("content").appendChild(br1);
}}
else
{
   wengile=wengile+genwengiel;
   console.log(wengile)
   document.getElementById("wen").innerHTML= "wegiel: "+wengile;
}}, 5000); //generowanie węgla
setInterval(function glin(){
   if(liglin==0){
      if(wengile !==0)
      {
         liglin=liglin+1;
   var button4 = document.createElement("button");
   var tekst4 = document.createTextNode("ulepszenie kopalni gliny cena:"+ cenhut+" desek");
   button4.onclick = function glinaa()    {
      glina();
    };
button4.setAttribute("id", "kugil");
button4.appendChild(tekst4);
var br4 = document.createElement("br")
document.getElementById("content").appendChild(button4);
document.getElementById("content").appendChild(br4);
 gengilna=gengilna+1;
}}else {
   gilna=gilna+gengilna;
   document.getElementById("gli").innerHTML="glina:"+gilna;
}},5000)//generowanie gliny
setInterval(function ceg(){
   if(liceg==0){
      if(gilna>10)
      {
         liceg=liceg+1;
   var button5 = document.createElement("button"); 
   var tekst5 = document.createTextNode("ulepszenie cegielni cena:"+ cenhut+" desek");
   button5.onclick = function gencegl()    {
      cegielnia();
    };
button5.setAttribute("id", "kuceg");
button5.appendChild(tekst5);
var br5 = document.createElement("br")
document.getElementById("content").appendChild(button5);
document.getElementById("content").appendChild(br5);

}}else 
{
   if (wengile==zapceg|| gilna==zapceg){
   gilna=gilna-zapceg;
   wengile=wengile-zapceg;
   cegly=cegly+zapceg;
   document.getElementById("gli").innerHTML="glina:"+gilna;
   document.getElementById("wen").innerHTML= "wegiel: "+wengile;
   document.getElementById("ceg").innerHTML="Cegieł:"+cegly;}
   else if (wengile>zapceg|| gilna>zapceg){   gilna=gilna-zapceg;
      wengile=wengile-zapceg;
      cegly=cegly+zapceg;
      document.getElementById("ceg").innerHTML="Cegieł:"+cegly;
      document.getElementById("gli").innerHTML="glina:"+gilna;
      document.getElementById("wen").innerHTML= "wegiel: "+wengile;
   }
}},5000)//generowanie cegieł
setInterval(function zela()  {
   if(lizel == 0){
      if(cegly==100 ||cegly >100 ){
          lizel=lizel+1;
   var button2 = document.createElement("button");
   var tekst2 = document.createTextNode("ulepszenie kopalni żelaza cena:"+ cenzel+" desek");
   button2.onclick = function zazel() 
   {
      kopzelaza();
    };
    var br2 = document.createElement("br")
button2.setAttribute("id", "kuzel");
button2.appendChild(tekst2);
document.getElementById("content").appendChild(button2);
document.getElementById("content").appendChild(br2);
   }}
else{
zelaza=zelaza+genzelaza;
document.getElementById("zel").innerHTML= "żelaza: "+zelaza;
}}, 5000);//generowajie żelaza
setInterval(function hut()  {
   if(lihut==0){
   if(zelaza!==0 && cegly !==0)
   {
      genstal = genstal+1;
      lihut = lihut+1;
      var button3 = document.createElement("button");
      var tekst3 = document.createTextNode("ulepszenie huta cena:"+ cenhut+" cegieł");
      button3.onclick = function zazel()    {
        huta();
       };
   button3.setAttribute("id", "kuhut");
   button3.appendChild(tekst3);
   var br3 = document.createElement("br")
   document.getElementById("content").appendChild(button3);
   document.getElementById("content").appendChild(br3);
   }}else {
   if(zelaza==genstal && cegly ==genstal)
   {
      zelaza=zelaza- genstal;
      wengile = wengile -genstal; 
      stal=stal+genstal;
      document.getElementById("sta").innerHTML="stal:"+stal;
      document.getElementById("wen").innerHTML= "wegiel: "+wengile;
      document.getElementById("zel").innerHTML= "żelaza: "+zelaza;
   }  else if(zelaza>genstal && cegly >genstal){
      zelaza=zelaza- genstal;
      wengile = wengile -genstal; 
      stal=stal+genstal;
      document.getElementById("sta").innerHTML="stal:"+stal;
      document.getElementById("wen").innerHTML= "wegiel: "+wengile;
      document.getElementById("zel").innerHTML= "żelaza: "+zelaza;
   }}
}, 5000)//działanie huty
setInterval(function fabryka(){
if(lifab==0){
   if(stal>50){
   lifab = lifab+1;
   var button6 = document.createElement("button");
   var tekst6 = document.createTextNode("ulepszenie fabryki cena:"+ cenhut+" cegieł");
   button6.onclick = function zazel()    {
     huta();
    };
button6.setAttribute("id", "kufab");
button6.appendChild(tekst6);
var br6 = document.createElement("br")
document.getElementById("content").appendChild(button6);
document.getElementById("content").appendChild(br6);
   }
}
else{
if(stal== genbelstal|| stal>genbelstal){
stal=stal=genbelstal;
belastal=belastal+genbelstal;
document.getElementById("bel").innerHTML= "Beli stalowych: "+zelaza;
document.getElementById("sta").innerHTML="stal:"+stal;
}
}
},5000);//działanie fabryki
}//działanie licznika
function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var left=document.querySelector(".left");
function profile(p){
var image=document.createElement("img");
image.src=p.image;
left.append(image);
var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);
var h3=document.createElement("h3");
h3.textContent=p.desig;
left.append(h3);
var h4=document.createElement("h3");
h4.textContent=p.mobile;
left.append(h4);
var h5=document.createElement("h3");
h5.textContent=p.email;
left.append(h5);
}
var right=document.querySelector(".right");
function career(c){
var h6=document.createElement("h2");
h6.textContent="Career Objective";
right.append(h6);
var hr=document.createElement("hr")
right.append(hr);
var h7=document.createElement("h4");
h7.textContent=c.info;
right.append(h7);
}
//education details
function education(e){
var h8=document.createElement("h2");
h8.textContent="Education details";
right.append(h8);
var hr=document.createElement("hr");
right.append(hr);
var tb=document.createElement("table");
var tr1="<tr><th>qualification</th><th>institute</th><th>per</th><th>yop</th></tr>";
var tr2=" ";
for(var i=0;i<e.length;i++)
{
  tr2=tr2+"<tr><td>"+e[i].qualification+"</td><td>"+e[i].institute+"</td><td>"+e[i].Per+"</td><td>"+e[i].yop+"</td></tr>";
}
tb.innerHTML=tr1+tr2;
right.append(tb);
}
function skills(s){
  var h9=document.createElement("h2");
  h9.textContent="skills";
  right.append(h9);
  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i=0;i<s.length;i++)
  {
    var li=document.createElement("li");
    li.innerHTML  =s[i].name+":"+s[i].info;
    ul.append(li);
  }
right.append(ul)

}

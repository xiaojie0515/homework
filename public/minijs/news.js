window.onload=function(){for(var t=document.getElementsByTagName("li"),e=0;e<t.length;e++)t[e].ontouchstart=function(){for(var e=this.getAttribute("dataid"),s=document.getElementsByClassName("otext"),n=0;n<s.length;n++)s[n].id==e?s[n].style.display="block":s[n].style.display="none",t[n].setAttribute("class","news"),this.setAttribute("class","news active")}};
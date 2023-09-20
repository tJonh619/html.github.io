window.onload=function()
{
    visor1=document.getElementById("visor");

}
function mifoto(num){
    f="Recursos/Foto"+num+".jpg";
    document.images["fotoVisor"].src=f;
    t=document.getElementById("Foto"+num).alt;
    document.getElementById("titulo").innerHTML= t;
}

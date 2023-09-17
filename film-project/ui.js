//arayüze film eklemek için UI constructorı:
function UI(){  //fonk. UI herhangi bir özellği olmayacak.Sdece prototyelere fonksiyon yazmaya çalışıcaz.

}

UI.prototype.addFilmToUI=function(newFilm){
   /* 
  <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->*/

const filmList=document.querySelector("#films");

filmList.innerHTML +=`
    <tr>
    <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>
    
    `
}
//submit ettikten sonra inputların içini temizlemek için:
UI.prototype.clearInputs=function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
}

//hata mesajları:
 UI.prototype.displayMessages=function(message,type){
//cardbody seçimi:
const cardBody=document.querySelector(".card-body");

//alert div ini oluşturma:
const div=document.createElement("div");
div.className=`alert alert-${type}`;
div.textContent=message;

cardBody.appendChild(div);

setTimeout(function(){
    div.remove();
    
},2000);



 }
 UI.prototype.loadAllFilms=function(films){
  const filmList=document.getElementById("films");
films.forEach(function(film){
  filmList.innerHTML +=`<tr>
  <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
  <td>${film.title}</td>
  <td>${film.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr>`
})

 }

 UI.prototype.deleteFilmFromUI=function(element){
  element.parentElement.parentElement.remove();
 }

 UI.prototype.clearAllFilmsFromUI=function(){
  const filmList=document.getElementById("films");
  // filmList.innerHTML="";

  while(filmList.firstElementChild !==null){
    filmList.firstElementChild.remove();
  }

 }
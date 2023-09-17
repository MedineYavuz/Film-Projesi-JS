const form=document.getElementById("film-form"); //form seçimi
//input alanların seçimi:
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");

//cardbody deçimi

const cardBody=document.querySelectorAll(".card-body")[1];

//tüm elementleri temizlemek için:
const clear=document.querySelector("#clear-films");

//UI objesini başlatma:
const ui=new UI();

//storage objesi üret
const storage=new Storage();

//tüm eventleri yükleme:
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}
function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director==="" || url===""){
        //hata
        ui.displayMessages("tüm alanları doldurun!","danger");
    


    }else{
        const newFilm=new Film(title,director,url);

        ui.addFilmToUI(newFilm)//ARAYÜZE FİLM EKLEME
        storage.addFilmToStorage(newFilm); //storage a film ekleme

        ui.displayMessages("film başarıyla eklendi","success");

    }


    ui.clearInputs(titleElement,directorElement,urlElement);



    e.preventDefault();
}

function deleteFilm(e){
   if(e.target.id==="delete-film"){
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    ui.displayMessages("silme işlemi başarıyla sonuçlandı...","success");
   }
}

function clearAllFilms(){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
}
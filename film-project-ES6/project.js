const form=document.getElementById("film-form"); //form seçimi
//input alanların seçimi:
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");

//cardbody deçimi

const cardBody=document.querySelectorAll(".card-body")[1];

//tüm elementleri temizlemek için:
const clear=document.querySelector("#clear-films");

// //UI objesini başlatma:
// const ui=new UI();

// //storage objesi üret
// const storage=new Storage();

//tüm eventleri yükleme:
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
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
        UI.displayMessages("tüm alanları doldurun!","danger");
    


    }else{
        const newFilm=new Film(title,director,url);

        UI.addFilmToUI(newFilm)//ARAYÜZE FİLM EKLEME
        Storage.addFilmToStorage(newFilm); //storage a film ekleme

        UI.displayMessages("film başarıyla eklendi","success");

    }


    UI.clearInputs(titleElement,directorElement,urlElement);



    e.preventDefault();
}

function deleteFilm(e){
   if(e.target.id==="delete-film"){
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

    UI.displayMessages("silme işlemi başarıyla sonuçlandı...","success");
   }
}

function clearAllFilms(){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}
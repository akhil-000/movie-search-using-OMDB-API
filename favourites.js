let container = document.querySelector(".container")//CONTAINER FOR ALL FAVOURITE MOVIES
const apiKey = '84d8082e'// API KEY


/*GETTING LIKED MOVIES'IMDB ID VALUES FROM LOCAL STORAGE*/
var x=localStorage.getItem("idvalues");
var y = JSON.parse(x);

if(y!=null)
console.log(y.length)
else
console.log("null")

y.forEach(x => { 
    
    fav_id(x) 
  
})

/*GETTING LIKED MOVIES'IMDB ID VALUES FROM LOCAL STORAGE*/


/*FUNCTION TO SEARCH FOR FAVOURITE MOVIES USING IMDB ID VALUES AND PRODUCING RESULTS ON THE FAVOURITES PAGE*/
function fav_id(id){
    
 /*MOVIE IMDB ID IS GRABBED AND DETAILS ARE FETCHED*/

 fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
  .then(res => {
      return res.json()
  }).then(data => {

/*MOVIE IMDB ID IS GRABBED AND DETAILS ARE FETCHED*/
      
               /*VARIOUS DETAILS FETCHED FROM FETCH API*/
                 let title = data.Title;
                  let poster = data.Poster;
                  console.log(poster)
                  let year = data.Year;
                  let id=data.imdbID;
            /*VARIOUS DETAILS FETCHED FROM FETCH API*/

               
            /*ELEMENTS*/
                  let info = document.createElement("div")
                  let imagediv = document.createElement("div")
                  let multi = document.createElement("div")
                  let card = document.createElement("div");
                  let remove =document.createElement("button")
            /*ELEMENTS*/

            /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */
            
                  remove.addEventListener("click",(e) => deletemovieitem(e, id))
                
                  imagediv.setAttribute("class","imagediv")

                  if(poster != "N/A"){
                 imagediv.style.backgroundImage=`url('${poster}')`;
                  }
                  else{
                    imagediv.style.backgroundImage="url('450px-No_image_available_450_x_600.jpg')";
                    }
             info.setAttribute("class","info")
         info.innerHTML=`<h2><a href="movieinfo.html?id=${id}"  style="color:#FF0000;">${title}, ${year}</a> </h2>`                 

            /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */
                 imagediv.style.backgroundRepeat="no-repeat";
                 imagediv.style.backgroundSize="cover";
                 card.setAttribute("class","card")
                  remove.setAttribute("class","fas fa-trash fa-lg")
                  remove.classList.add("delete")
                  multi.setAttribute("class","multi-button")
            /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */
                 
                 
                  /*APPENDING CHILD ELEMENTS TO PARENT ELEMENTS*/
                  container.appendChild(card);
                   card.appendChild(imagediv)
                   card.appendChild(multi);
                   multi.appendChild(remove);
                   imagediv.appendChild(info)
                  /*APPENDING CHILD ELEMENTS TO PARENT ELEMENTS*/

  })
  }
/*FUNCTION TO SEARCH FOR FAVOURITE MOVIES USING IMDB ID VALUES AND PRODUCING RESULTS ON THE FAVOURITES PAGE*/


/*DELETE BUTTON FUNCTIONALITY*/

  function deletemovieitem(event, idval) {
    const self = event.target;
    const parent = self.parentElement.parentElement;
    deletemovieid(idval);
    parent.remove(); 
}

function deletemovieid(idval) {
   
    const index = y.indexOf(idval);
    y.splice(index, 1);
    localStorage.setItem("idvalues", JSON.stringify(y));
    
}
/*DELETE BUTTON FUNCTIONALITY*/
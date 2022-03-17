/*USEFUL VARIABLES AND ELEMENTS*/
var count=0;
var i = 0;
var images = [];
var slideTime = 7000; 
var something = document.getElementById('search-wrapper');
something.setAttribute("class","")
var button=document.getElementById('submit-btn');
var field=document.getElementById('search-field');
var arr=[]
const apiKey = '84d8082e'
/*USEFUL VARIABLES AND ELEMENTS*/


/*SEARCH BAR WORKING AND ANIMATION */

/*CLICKING ON ANYWHERE EXCEPT SEARCH BAR WILL CLOSE SEARCH BAR AND MOVES IT BACK*/
document.body.onclick=function(e)
{ 
  if( e.target.id !="submit-btn" && e.target.id!="search-wrapper" && e.target.id!="search-field" && e.target.tagname!="nav" && e.target.id!="wrappper")
  { 
  field.value=""
  var x=document.getElementById("wrappper")
var child = x.lastElementChild; 
      while (child) {
          x.removeChild(child);
          child = x.lastElementChild;
      } 
     console.log(e.target.id)
     something.setAttribute("class","moveback")

  count=0;
   }
 
}
/*CLICKING ON ANYWHERE EXCEPT SEARCH BAR WILL CLOSE SEARCH BAR AND MOVES IT BACK*/



/*SUBMIT-BUTTON FUNCTIONALITY AND MOVES SEARCH BAR TO MIDDLE*/ 
button.onclick = function() {
  count++;
  if(count==1){
  something.setAttribute("class","move")  
 
  field.focus();
   
  }
 
  else{
    
  var x=document.getElementById("wrappper")
  var child = x.lastElementChild; 
        while (child) {
            x.removeChild(child);
            child = x.lastElementChild;
        } 
    something.setAttribute("class","moveback")  
    count=0;
    field.blur();
  }
};
/*SUBMIT-BUTTON FUNCTIONALITY AND MOVES SEARCH BAR TO MIDDLE*/ 
  
 /*SEARCH BAR WORKING AND ANIMATION */



/*DUMMY MOVIE CAROUSEL*/

  images[0] = 'dracula_untold.jpg';
  images[1] = 'B61F41AD-6007-4197-8A34-3D456E8AD4CC-1024x538.webp';
  images[2] = 'hogwarts-legacy-1.webp';
  

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > images.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = images.length}
  document.body.style.backgroundImage = "url(" + images[slideIndex -1] + ")";
 
}

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

/*DUMMY MOVIE CAROUSEL*/


/*SEARCH SUGGESTIONS UPDATION*/
function searchvalue(z){

/*CLOSES PREVIOUS SEARCH SUGGESTIONS WITH INPUT CHANGE*/ 
  var x=document.getElementById("wrappper")
  var child = x.lastElementChild; 
        while (child) {
            x.removeChild(child);
            child = x.lastElementChild;
        } 
/*CLOSES PREVIOUS SEARCH SUGGESTIONS WITH INPUT CHANGE*/ 
       
/*USING FETCH API AND MOVIE NAME TO PRODUCE SEARCH SUGGESTION WITH IMAGE, TITLE AND YEAR*/
  fetch(`https://www.omdbapi.com/?s=${z}&apikey=${apiKey}`)
.then(res => {
    return res.json()
}).then(data => {
  console.log(data.search)
  let searchOutput = data.Search;
  if (data.res == "False") {
    alert(data.Error);
    document.querySelector("#search-field").value = "";
  }
  searchOutput.forEach(result =>{
      let title = result.Title;
      let poster = result.Poster;
      let year = result.Year;
      let id=result.imdbID;
    
/*USING FETCH API AND MOVIE NAME TO PRODUCE SEARCH SUGGESTIONs WITH IMAGE, TITLE AND YEAR*/


     /*ELEMENTS*/
     let search_field=document.getElementById("wrappper") 
      let search_container=document.createElement("div")
      let search_list = document.createElement("div");
      let search_image = document.createElement("IMG")
      let search_year = document.createElement("div")
     /*ELEMENTS*/

    /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */ 
     search_container.setAttribute("class","search_container")
     search_list.setAttribute("class","search_list")
     search_image.setAttribute("src",`${poster}`)
     search_image.setAttribute("class","search_image")
     search_year.setAttribute("class","search_year")
     search_year.innerHTML=`${title},${year}`
     search_list.setAttribute("onclick",`location.href='movieinfo.html?id=${id}'`)
   /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */

    /*APPENDING CHILD ELEMENTS TO PARENT ELEMENTS*/
     search_field.appendChild(search_container);
     search_container.appendChild(search_list)
     search_list.appendChild(search_image)
     search_list.appendChild(search_year)   
    /*APPENDING CHILD ELEMENTS TO PARENT ELEMENTS*/
 
  })
})
}
/*SEARCH SUGGESTIONS UPDATION*/


/*MOVIE RESULTS WITH FAVOURITE BUTTON AND HYPERLINK TO MOVIE PAGE ON CLICKING SEARCH BUTTON*/

document.querySelector("#submit-btn").addEventListener("click", () => {
  document.querySelector(".cards").innerHTML = "";

  let movie = document.querySelector("#search-field").value.toLowerCase();

  /*USING FETCH API AND MOVIE NAME TO PRODUCE SEARCH RESULTS WITH IMAGE, TITLE YEAR ,IMDB ID AND TYPE OF RESULT*/

        fetch(`https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`)
            .then(res => {
                return res.json()
            }).then(data => {
              let searchOutput = data.Search;
              if (data.res == "False") {
                alert(data.Error);
                document.querySelector("#search-field").value = "";
              }
 /*USING FETCH API AND MOVIE NAME TO PRODUCE SEARCH RESULTS WITH IMAGE, TITLE , YEAR ,IMDB ID AND TYPE OF RESULT*/
             
 
          /*GETTING DATA FOR EACH MOVIE RESULT*/
              searchOutput.forEach(result =>{
                  let title = result.Title;
                  let poster = result.Poster;
                  let year = result.Year;
                  let type = result.Type;
                  let id=result.imdbID;
            /*GETTING DATA FOR EACH MOVIE RESULT*/


      /*CREATING MOVIE RESULT ELEMENTS WITH FAVOURTIE BUTTON AND HYPERLINKS*/
                  let cards = document.querySelector(".cards")
                  let cardDiv = document.createElement("div");
                  let movieImage = document.createElement("IMG")
                  let foodImage = document.createElement("IMG")
                  let movieDescription = document.createElement("div")
                  let multi = document.createElement("div")
                  let fav = document.createElement("button");
      /*CREATING MOVIE RESULT ELEMENTS WITH FAVOURTIE BUTTON AND HYPERLINKS*/



      /*FILTERING MOVIES FROM OTHER TYPES OF RESULTS USING TYPE*/ 
                  if (type == "movie" || type == "series") {

                   /*APPENDING CHILD ELEMENTS TO PARENT ELEMENTS*/    
                      cards.appendChild(cardDiv)
                      cardDiv.appendChild(movieImage)
                      cardDiv.appendChild(multi)
                      multi.appendChild(fav)
                      cardDiv.appendChild(foodImage)
                      cardDiv.appendChild(movieDescription)
                   /*APPENDING CHILD ELEMENTS TO PARENT ELEMENTS*/
  
                  
                   /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */
                      cards.classList.add( "cards")
                      cardDiv.classList.add("container");
                      foodImage.classList.add( "food")
                      multi.classList.add( "multi-button")
                     movieImage.classList.add( "img")
                     movieDescription.classList.add( "content")
                   
                     //favourite button
                      fav.setAttribute("data-clickcount","0")
                      fav.setAttribute("class","fas fa-heart fa-lg")
                      fav.setAttribute("style", "color:white; background-color:red;border-radius:100%;width: 3rem; height: 3rem;border: none;");
                      fav.setAttribute("value",`${id}`)
                      fav.setAttribute("name","fname")

                      
                         //movie image
                         
                         if(poster != "N/A")
                         {
                           movieImage.setAttribute("src", `${poster}`);
                          }

                         else
                         {
                           movieImage.setAttribute("src","450px-No_image_available_450_x_600.jpg")
                         }

                        //movie image

                     //burger image
                  foodImage.setAttribute("src", "https://isometric.online/wp-content/uploads/2020/04/food_svg.svg ");
                      
                      
                      // add title and year
                      movieDescription.innerHTML = `<h2><a href="movieinfo.html?id=${id}">${title}, ${year}</a> </h2>`

               /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */

                 
                 
                /*MOVIE CARD HOVERING ANIMATIONS*/ 
                   cardDiv.onmouseover=function(){
                    movieDescription.classList.add("contentclass");
                    movieImage.classList.add("imgclass");
                    foodImage.classList.add("shake");
                  };
                  cardDiv.onmouseout=function(){
                  movieDescription.classList.remove("contentclass");
                  movieImage.classList.remove("imgclass");
                  foodImage.classList.remove("shake");
                  };
                 /*MOVIE CARD HOVERING ANIMATIONS*/ 
                

        /*FAVOURITE BUTTON FUNCTIONALITY*/
        fav.onclick=function()
        
        {
                      
           y= fav.getAttribute("data-clickcount")
                    
             y++;
                   
          fav.setAttribute("data-clickcount",y)
                   
           z=fav.getAttribute("data-clickcount")
                   
           if(z==1)
           {
                   
         fav.setAttribute("style","color:red;background-color:white; border-radius:100%;width: 3rem; height: 3rem;border: none;")
                  
          pushtols(fav.value);
                  
          }
              
          else{
                     
            deletevalueFromLocal(fav.value);   
                                  
                      
            }
        
      }
    
      /*FAVOURITE BUTTON FUNCTIONALITY*/
     
            
      /*FUNCTION TO CREATE ARRAY IN LOCAL STORAGE*/
                  function checkarray() 
                  {
                      let array = [];
                      const isPresent = localStorage.getItem("idvalues");
                      if (isPresent) array = JSON.parse(isPresent);
                      return array;
                  }
      /*FUNCTION TO CREATE ARRAY IN LOCAL STORAGE*/


      /*FUNCTION TO STORE FAVOURITE MOVIES' IMDB IDS IN LOCAL STORAGE ARRAY*/

                function pushtols(value)
				      	{
						      	const arry= checkarray();  
						      	arry.push(value);
							     localStorage.setItem("idvalues", JSON.stringify(arry));
					
					      }
      /*FUNCTION TO STORE FAVOURITE MOVIES' IMDB IDS IN LOCAL STORAGE ARRAY*/

      /*FUNCTION TO DELETE FAVOURITE MOVIE FROM LIST ON SECOND CLICK ON FAVOURITE BUTTON*/
              	function deletevalueFromLocal(x) {
                  const arrr = checkarray();
                  const index = arrr.indexOf(x); 
                  arrr.splice(index, 1);
                  localStorage.setItem("idvalues", JSON.stringify(arrr));
                  fav.setAttribute("style","color:white;background-color:red; border-radius:100%;width: 3rem; height: 3rem;border: none;");
                        fav.setAttribute("data-clickcount","0")
                } 
       /*FUNCTION TO DELETE FAVOURITE MOVIE FROM LIST ON SECOND CLICK ON FAVOURITE BUTTON*/
          
              /*SETTING SELECTED STATE OF FAVOURITE BUTTON FOR LIKED MOVIES*/  
                var nodes=document.getElementsByName("fname");
                var local=localStorage.getItem("idvalues");
                var llocall = JSON.parse(local);
                 
                llocall.forEach(x => { 
                nodes.forEach(z=>{
                if(x==z.value){
                z.setAttribute("style","color:red;background-color:white; border-radius:100%;width: 3rem; height: 3rem;border: none;")
               z.setAttribute("data-clickcount","1")
              }
                    }
                   )
                 })
              /*SETTING SELECTED STATE OF FAVOURITE BUTTON FOR LIKED MOVIES*/  

  
              }
            
            /*FILTERING MOVIES FROM OTHER TYPES OF RESULTS USING TYPE*/ 
   
              
              
              /*FILTERING NON-MOVIE RESULTS FROM OTHER TYPES OF RESULTS USING TYPE*/ 

              else  {
                      console.log(`There is also a ${type} with the name: ${title}`);
                      document.querySelector("#search-field").value = "";
                    }  
              
              /*FILTERING NON-MOVIE RESULTS FROM OTHER TYPES OF RESULTS USING TYPE*/     
                    

              })
            })
    
});
/*MOVIE RESULTS WITH FAVOURITE BUTTON AND HYPERLINK TO MOVIE PAGE ON CLICKING SEARCH BUTTON*/


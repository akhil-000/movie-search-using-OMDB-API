
/*GRABS IMDB ID ON CLICKING MOVIE THROUGH HYPERLINK*/

const urlParams = new URLSearchParams(window.location.search);
  const idValue = urlParams.get('id');
  console.log(idValue);

  /*GRABS IMDB ID ON CLICKING MOVIE THROUGH HYPERLINK*/


  const apiKey = '84d8082e'// API KEY

       /*MOVIE IMDB ID IS GRABBED AND DETAILS ARE FETCHED*/ 
        fetch(`https://www.omdbapi.com/?i=${idValue}&apikey=${apiKey}`)
            .then(res => {
                return res.json()
            }).then(data => {
              console.log(data);
        /*MOVIE IMDB ID IS GRABBED AND DETAILS ARE FETCHED*/        
                 
        
        /*VARIOUS DETAILS FETCHED FROM FETCH API*/
                  let title =data.Title;
                  let poster =data.Poster;
                  let year =data.Year;
                  let Actors = data.Actors;
                  let Country = data.Country;
                  let Director = data.Director;
                  let Genre = data.Genre;
                  let imdbRating = data.imdbRating;
                  let imdbVotes = data.imdbVotes;
                  let Language = data.Language;
                  let Plot = data.Plot;
                  let Production = data.Production;
                  let Runtime = data.Runtime;
                  let Writer = data.Writer;
       /*VARIOUS DETAILS FETCHED FROM FETCH API*/


                /*ELEMENTS*/

                  let cardback = document.getElementsByClassName("card-back")[0]
                  let cardfront = document.getElementsByClassName("card-front")[0]
                  let insidepage = document.getElementsByClassName("inside-page")[0]
                  let imagediv=document.createElement("div")

                  let temp =document.createElement("div")
                  let writer =document.createElement("div")
                  let director =document.createElement("div")
                  let language =document.createElement("div")
                  let nation =document.createElement("div")
                  let cash =document.createElement("div")
                  let imdbvote =document.createElement("div")
                  let imdbrating =document.createElement("div")
                  let story= document.createElement("div")
                  let cast= document.createElement("div")
                  let genres= document.createElement("div")
                  let calender= document.createElement("div")
                  let duration= document.createElement("div")
                  let leftsidediv= document.createElement("div")
                  let rightsidediv= document.createElement("div")
                  let Image = document.createElement("IMG")


                  /*ELEMENTS*/
                
              
              /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */
              
                  temp.setAttribute("class","temp")
                 

                writer .classList.add("writer")
                writer.innerHTML=`<i class="fas fa-user-edit"></i> ${ Writer }`
                
                director .classList.add("director")
                director.innerHTML=`<i class="fa fa-video-camera"></i> ${ Director }`
                
                
                language .classList.add("language")
                language.innerHTML=`<i class="fa fa-language"></i> ${ Language }`


                nation .classList.add("nation")
                nation.innerHTML=`<i class="fa fa-flag"></i> ${ Country }`

                cash .classList.add("cash")
                cash.innerHTML=`<i class="fas fa-file-invoice-dollar"></i> ${ Production }`

                imdbvote .classList.add("imdbvote")
                imdbvote.innerHTML=`<i class="far fa-thumbs-up"></i> ${ imdbVotes }`

                imdbrating .classList.add("imdbrating")
                imdbrating.innerHTML=`<i class="fas fa-star"></i> ${ imdbRating }`

                story.classList.add("story")
                story.innerHTML=`<i class='	far fa-edit '></i><h2>plot</h2>  <br> ${Plot}`

                  cast.classList.add("cast")
                  cast.innerHTML=`<i class='fa-solid fa-clapperboard'></i>${Actors}`
                
                  genres.classList.add("genres")
                  genres.innerHTML="#";
                  genres.innerHTML+=`${Genre}`
                
                  duration.classList.add("duration")
                  duration.innerHTML=`<i class='fas fa-clock'></i>${Runtime}`
                 
                  calender.classList.add("calender")
                  calender.innerHTML=`<i class='far fa-calendar'></i>${year}`
                 
                  rightsidediv.setAttribute("class","card-front__rightside")
                  rightsidediv.innerHTML=`${title} `
                 
                  leftsidediv.setAttribute("class","card-front__leftside")
                 
                  if(poster != "N/A"){
                    Image.setAttribute("src", `${poster}`);}

                    else{
                    Image.setAttribute("src","450px-No_image_available_450_x_600.jpg")
                    }
                  imagediv.setAttribute("class", "imagediv");
            Image.setAttribute("class","img")

              /*ADDING CLASSES AND ATTRIBUTES TO ELEMENTS */




              /*APPENDING CHILD ELEMENTS TO PARENT ELEMENTS*/

                  cardfront.appendChild(imagediv)
                  imagediv.appendChild(Image)
                   
                    cardfront.appendChild(rightsidediv)
                    cardfront.appendChild(leftsidediv)
                    cardback.appendChild(calender)
                    cardback.appendChild(duration)
                    cardback.appendChild(genres)
                    cardback.appendChild(cast)
                    cardback.appendChild( imdbrating )
                    cardback.appendChild(imdbvote)
                    cardback.appendChild(cash)
                    cardback.appendChild(nation)
                    cardback.appendChild(language)
                    cardback.appendChild(director)
                    cardback.appendChild(writer)
                    insidepage.appendChild(story)
                  document.body.appendChild(temp)
              
                   /*APPENDING CHILD ELEMENTS TO PARENT ELEMENTS*/
            })
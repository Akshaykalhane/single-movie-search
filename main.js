const inputEl=document.querySelector('#search');
const searchButton = document.querySelector('#search-btn')
const displayUI = document.querySelector('.detail-container');
const searchAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=a66b00ba4c9ce449bb3a8e37e28ec29c&query='
const imageURL = 'https://image.tmdb.org/t/p/w1280';
const dummyImage = 'https://picsum.photos/200/300';
const error = document.querySelector('.error')

const displayData=(data)=>{
    error.innerHTML=''
    console.log(data)
    if(data==undefined){
        error.textContent='movie not found'
    } else{

        let imgSrc = data.backdrop_path !==null ? imageURL+data.backdrop_path : dummyImage;
        displayUI.innerHTML=`
    <div class="movie-info">
        <div class="img-box">
            <img src=${imgSrc} />
        </div>
        <div class="text-detail"></div>
    </div>  
    `
}
}

const getMovieData=async ()=>{
    if(inputEl.value==''){
        console.log('value empty')
        validate()
    } else{
            let url =searchAPI+inputEl.value;
        let res = await fetch(url)
        let data = await res.json();
        displayData(data.results[0])
}
 
}

function validate(){
    error.textContent='enter movie name first'
}

searchButton.addEventListener('click',getMovieData)

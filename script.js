// const titleEl = document.querySelector(".article-title")
// const descriptionEl = document.querySelector(".article-description")

// var search = window.location.search.substr(1)

// if (search) {
//     let API_URL = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=" + search

//     fetch(API_URL)
//     .then(response => {
//         response = response.query.pages
//     })
// }

let input = document.querySelector(".input")
let findEl = document.getElementById("find")
let result = document.getElementById("search-result")

function fetchData(searchKey){

    let API_URL =`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchKey}`
       fetch(API_URL)
       .then(response => response.json())
       .then(data => {
           console.log(data)

           result.innerHTML = ``
           data.query.search.forEach(item=>{
               let resultURL = `https://en.wikipedia.org/?curid=${item.pageid}`
               result.insertAdjacentHTML('afterBegin', ` <div class="result-item">
               <a href="${resultURL}" target= "_blank" class="result-title">${item.title}</a>
               <a href="${resultURL}" target="_blank" class="link">${resultURL}</a>
               <p>${item.snippet}</p>
               </div>`)
           })
       })

}


findEl.addEventListener("click", ()=> {
    if(input.value !== "") {
       fetchData(input.value)
    }
})
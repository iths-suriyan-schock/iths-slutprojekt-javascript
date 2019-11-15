let inputField = document.querySelector("#inputCardName");

inputField.addEventListener("key"+"up", async function(event){
    if(event.key == "Enter") {
        
        let url = `https://api.scryfall.com/cards/search?q=${inputField.value.replace(" ", "+")}&unique=cards`
        console.log(url);
        
        let result = await fetch(url)
        console.log(result);
        
        let response = await result.json()
        console.log(response)
        
        let filteredList = document.querySelectorAll(".results > li")
        
        for(let element of filteredList) {
            element.remove()
        }
        
        for(let card of response.data) {
            let resultList = document.querySelector(".results")
            let newList = document.createElement("li")
            newList.innerText = card.name
            resultList.appendChild(newList)
            
            newList.addEventListener("click", function(){
                let pic = document.querySelector("#cardimg")
                pic.src = card.image_uris.border_crop     
                console.log(card)
            })
        }
    }
})

let options = [1, 2, 3, 4, 6, 7, 10, 13, 14, 15, 16, 17, 20];

function GetRandom(arr) {
    let max = arr.length
    let randomInt = Math.floor(Math.random() * max);
    return arr[randomInt]
}

function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    let url = `https://thesimpsonsapi.com/api/characters/${GetRandom(options).toString()}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let simpson_phrase = document.getElementById("simpson_phrase")
            let author = document.getElementById("author")
            simpson_phrase.textContent = GetRandom(data.phrases);
            author.textContent = data.name
        }
        )
        .catch(error => {
            
            let randomQuote = document.getElementById("randomQuote")
            deleteChildElements(randomQuote);
            let phrase = document.createElement("p");
            phrase.textContent = GetRandom("Oops couldn't load that epic quote!");
            randomQuote.append(phrase);
            console.log(`Error fetching the Simpson character information: ${error}`)
        
        }
        )

}); 

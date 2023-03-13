const img = document.querySelector('img')
const button = document.querySelector('button')

const generate = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        let photo = data.message;
        img.setAttribute("src" , photo)
    })

}

button.addEventListener('click' , generate)
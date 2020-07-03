window.onload = function() {

    const formElement = document.querySelector('form');
    
    
    formElement.addEventListener('submit', (event) => {
        // Stops form from refreshing after hitting the submit button
        event.preventDefault();

        // Identifies Meme Container
        const memeShowcase = this.document.getElementById('memeShowcase');

        // Display Image from URL
        const image = document.createElement('img');
        image.classList.add('memeImage');
        const src = document.getElementById('imageURL').value;
        image.setAttribute('src', src);
        memeShowcase.appendChild(image);

        // let img = new this.Image();
        // img.src = this.document.getElementById('imageURL');
        // memeShowcase.appendChild(img);

        // var img = document.createElement('img');
        // img.classList.add('memeImage');
        // var src = document.getElementById('imageURL').value;
        // img.src = src;
        // memeShowcase.appendChild(img);

        // Display Text on Image

        // Top Text
        const 
    });




}
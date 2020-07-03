window.onload = function() {

    const formElement = document.querySelector('form');
    
    
    formElement.addEventListener('submit', (event) => {
        // Stops form from refreshing after hitting the submit button
        event.preventDefault();

        // Identifies Meme Container
        const memeShowcase = this.document.getElementById('memeShowcase');




        // Attempt without the image container
        // const image = document.createElement('img');
        // image.classList.add('memeImage');
        // const src = document.getElementById('imageURL').value;
        // image.setAttribute('src', src);
        // memeShowcase.appendChild(image);


        // Create Image Container
        const imgFlexContainer = document.createElement('div');
        imgFlexContainer.classList.add('imgFlexContainer');
        memeShowcase.appendChild(imgFlexContainer);
        // Display Image from URL
        const image = document.createElement('img');
        image.classList.add('memeImage');
        const src = document.getElementById('imageURL').value;
        image.setAttribute('src', src);
        imgFlexContainer.appendChild(image);


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
        const upperText = document.createElement('p');
        upperText.classList.add('imageText');
        upperText.classList.add('upperText');
        const topTextValue = this.document.getElementById('topText').value;
        upperText.innerText = topTextValue;
        imgFlexContainer.appendChild(upperText);

        // Bottom Text
        const lowerText = document.createElement('p');
        lowerText.classList.add('imageText');
        lowerText.classList.add('lowerText');
        const lowerTextValue = this.document.getElementById('bottomText').value;
        lowerText.innerText = lowerTextValue;
        imgFlexContainer.appendChild(lowerText);


    });




}
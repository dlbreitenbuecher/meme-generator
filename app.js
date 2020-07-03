window.onload = function() {

    const formElement = document.querySelector('form');
    
    
    formElement.addEventListener('submit', (event) => {
        // Stops form from refreshing after hitting the submit button
        event.preventDefault();

        // Identifies Meme Container
        var memeShowcase = this.document.getElementById('memeShowcase');

        // Create Image Container
        var imgFlexContainer = document.createElement('div');
        imgFlexContainer.classList.add('imgFlexContainer');
        memeShowcase.appendChild(imgFlexContainer);
        // Display Image from URL
        var image = document.createElement('img');
        image.classList.add('memeImage');
        var src = document.getElementById('imageURL').value;
        image.setAttribute('src', src);
        imgFlexContainer.appendChild(image);


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



        // Hover State to Delete Image
        imgFlexContainer.onmouseenter=function mouseOver(){
            imgFlexContainer.classList.add('deleteImage');
            let deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteButton');
            deleteButton.innerText = 'X';
            imgFlexContainer.setAttribute('id', 'test');
            imgFlexContainer.appendChild(deleteButton);

            // deleteButton.onclick=function deleteImage() {
            //     memeShowcase.removeChild(imgFlexContainer);
            // }


            deleteButton.addEventListener('click', function(event) {
                console.log(event.target.parentNode.parentNode);
                event.target.parentNode.parentNode.removeChild(event.target.parentNode);
            });
        };
        // Removing Hover State to Delete Image
        imgFlexContainer.onmouseleave = function mouseLeave(){
            imgFlexContainer.classList.remove('deleteImage');
            imgFlexContainer.removeChild(document.querySelector('button'));
            imgFlexContainer.removeAttribute('id', 'test');
        }


    });
    
    // function mouseOver(event) {
    //     event.target.setAttribute('id', 'deleteImage');
    // }

    // let test = document.querySelectorAll('img');
    // for (let i=0; i<test.length; i++) {
    //     test[i].addEventListener('mouseover', mouseOver(event));
    // }

    // var imageContainer = document.getElementsByClassName('imgFlexContainer');
    // for(var i=0; i<imageContainer.length; i++) {
    //     document.querySelector(imageContainer[i] '.lowerText').addEventListener('mouseover', mouseOverDelete);
    // }

    // image.addEventListener('mouseover', () => {
    //     let lowerText = document.getElementsByClassName('lowerText');
    //     lowerText.innerText = 'Hover';
    // })


}
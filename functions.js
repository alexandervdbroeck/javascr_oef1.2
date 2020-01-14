function nextImage(img_nbr = 0){
    //array of the imgage names
    const images = ['product_01.JPG','product_02.JPG','product_03.JPG','product_04.JPG']
    // if there is no foto number given , take the next picture
    if(img_nbr == 0){
        // get image src and take last part (product_xx.jpg)
        const  image = document.getElementById('image').src;
        var srcsplit = image.split("/")
        var img_ext = srcsplit.slice(-1)
        //check the location in of the imgname in the array
        var img_nbr = images.indexOf(img_ext[0]);
        //then take the next one, if the last image is selected go to the first one.
        img_nbr += 1
        if (img_nbr == 4){
            img_nbr = 0
        }
        // change the image src
        document.getElementById("image").src = 'slideshow/' + images[img_nbr];
        return false
    }
    // for correct array position subtract one form the given foto number
    img_nbr -= 1
    document.getElementById("image").src = 'slideshow/' + images[img_nbr];
}


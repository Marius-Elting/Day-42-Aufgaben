fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(data => {
        const photos = data;
        console.log(photos);
        photos.forEach(photo => {

            let figure = document.createElement("figure");
            let img = document.createElement("img");
            let figcaption = document.createElement("figcaption");
            figcaption.innerHTML = photo.author;
            img.src = photo.download_url;
            img.style.width = "300px";
            // img.alt = photo.title;

            figure.appendChild(img);
            figure.appendChild(figcaption);
            document.body.appendChild(figure);
        });
    });

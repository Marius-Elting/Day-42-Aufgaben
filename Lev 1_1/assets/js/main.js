fetch("https://picsum.photos/v2/list")
    .then(response => response.json())
    .then(data => {
        const photos = data;
        console.log(photos);
    });

async function getData() {
    const result = await fetch('https://randomuser.me/api?results=12');
    const characters = await result.json();
    console.log(characters);
    characters.results.forEach(element => {
     const box = document.createRange().createContextualFragment(`
        
        <div class="box box-1">
            <div class="test-row-img">
                <img src="${element.picture.large}" alt="">
                    <div class="test-row-name">
                        <h5>${element.name.first} ${element.name.last}</h5>

                        <h5 class="buyer">City: ${element.location.city}</h5>
                        <h5 class="buyer">Country: ${element.location.country}</h5>
                    </div>
            </div>
            <div class="test-row-text">
                <p>“ Lorem ipsum dolor sit amet consectetur. Convallis nam aliquet odio amet morbi amet. Adipiscing facilisi cras tempus eget sodales. Ac at dictum malesuada leo massa non. Et non vitae placerat nunc nisi ”</p>
            </div>
        </div>
        
        `)
        const text_row  = document.querySelector('.test-row');
        text_row.append(box);
    });
}

getData()
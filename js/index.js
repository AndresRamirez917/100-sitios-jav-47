async function getData() {
    const result = await fetch('https://randomuser.me/api?results=12');
    const characters = await result.json();
    console.log(characters);
}

getData()
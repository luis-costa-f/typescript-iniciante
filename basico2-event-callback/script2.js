"use strict";
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData1() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook);
}
handleData1();

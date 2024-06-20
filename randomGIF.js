//Random cat GIF generator

async function getGIF() {
// Await to fetch data from the API
    try {
        let item = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");
        // Return the url of item in the console
        console.log(item.url);
    }
    //Error handling is executed, catching any errors if fetch fails
    catch (error) {
        console.log(error);
    }
}
//call async function getGif
getGIF();
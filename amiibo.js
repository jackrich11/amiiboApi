
const OBJ_ARRAY = [
    {
        name: "Select Character",
        head: "-1"
    },
    { 
        name: "Mario",
        head: "00000000"
    },
    { 
        name: "Donkey Kong",
        head: "00080000"
    },
    { 
        name: "Link",
        head: "01000000"
    },
    { 
        name: "Samus",
        head: "05C00000"
    },
    { 
        name: "Dark Samus",
        head: "05C30000"
    },
    { 
        name: "Yoshi",
        head: "00030000"
    },
    { 
        name: "Kirby",
        head: "1F000000"
    },
    { 
        name: "Fox",
        head: "05800000"
    },
    { 
        name: "Pikachu",
        head: "19190000"
    },
    { 
        name: "Luigi",
        head: "00010000"
    },
    { 
        name: "Ness",
        head: "22800000"
    },
    { 
        name: "Captain Falcon",
        head: "06000000"
    },
    { 
        name: "Jigglypuff",
        head: "19270000"
    },
    { 
        name: "Peach",
        head: "00020000"
    },
    { 
        name: "Daisy",
        head: "00130000"
    },
    { 
        name: "Bowser",
        head: "00050000"
    },
    { 
        name: "Ice Climbers",
        head: "078F0000"
    },
    { 
        name: "Sheik",
        head: "01010100"
    },
    { 
        name: "Zelda",
        head: "01010000"
    },
    { 
        name: "Dr Mario",
        head: "00000100"
    },
    { 
        name: "Pichu",
        head: "19AC0000"
    },
    { 
        name: "Falco",
        head: "05810000"
    },
    { 
        name: "Marth",
        head: "21000000"
    },
    { 
        name: "Lucina",
        head: "21020000"
    },
    { 
        name: "Young Link",
        head: "01000000"
    },
    { 
        name: "Ganondorf",
        head: "01020100"
    },
    { 
        name: "Mewtwo",
        head: "19960000"
    },
    { 
        name: "Roy",
        head: "21040000"
    },
    { 
        name: "Chrom",
        head: "21080000"
    },
    { 
        name: "Mr Game & Watch",
        head: "07800000"
    },
    { 
        name: "Meta Knight",
        head: "1F010000"
    },
    { 
        name: "Pit",
        head: "07400000"
    },
    { 
        name: "Dark Pit",
        head: "07410000"
    },
    { 
        name: "Zero Suit Samus",
        head: "05C00100"
    },
    { 
        name: "Wario",
        head: "00070000"
    },
    { 
        name: "Snake",
        head: "37800000"
    },
    { 
        name: "Ike",
        head: "21010000"
    },
    { 
        name: "Pokémon Trainer",
        head: "1D400000"
    },
    { 
        name: "Diddy Kong",
        head: "00090000"
    },
    { 
        name: "Lucas",
        head: "22810000"
    },
    { 
        name: "Sonic",
        head: "32000000"
    },
    { 
        name: "King Dedede",
        head: "1F020000"
    },
    { 
        name: "Olimar",
        head: "06400100"
    },
    { 
        name: "Lucario",
        head: "1AC00000"
    },
    { 
        name: "ROB",
        head: "07810000"
    },
    { 
        name: "Toon Link",
        head: "01000100"
    },
    { 
        name: "Wolf",
        head: "05840000"
    },
    { 
        name: "Villager",
        head: "01800000"
    },
    { 
        name: "Mega Man",
        head: "34800000"
    },
    { 
        name: "Rosalina & Luma",
        head: "00040100"
    },
    { 
        name: "Wii Fit Trainer",
        head: "07000000"
    },
    { 
        name: "Little Mac",
        head: "06C00000"
    },
    { 
        name: "Greninja",
        head: "1B920000"
    },
    { 
        name: "Palutena",
        head: "07420000"
    },
    { 
        name: "Pac-Man",
        head: "33400000"
    },
    { 
        name: "Robin",
        head: "21030000"
    },
    { 
        name: "Shulk",
        head: "22400000"
    },
    { 
        name: "Bowser Jr",
        head: "00060000"
    },
    { 
        name: "Duck Hunt",
        head: "07820000"
    },
    { 
        name: "Ryu",
        head: "34C00000"
    },
    { 
        name: "Ken",
        head: "34C10000"
    },
    { 
        name: "Cloud",
        head: "36000000"
    },
    { 
        name: "Corrin",
        head: "21050000"
    },
    { 
        name: "Bayonetta",
        head: "32400000"
    },
    { 
        name: "Inkling",
        head: "08000100"
    },
    { 
        name: "Ridley",
        head: "05C20000"
    },
    { 
        name: "Simon",
        head: "37C00000"
    },
    { 
        name: "Richter",
        head: "37C10000"
    },
    { 
        name: "King K Rool",
        head: "00C00000"
    },
    { 
        name: "Incineroar",
        head: "1BD70000"
    },
    { 
        name: "Piranha Plant",
        head: "00240000"
    },
    { 
        name: "Joker",
        head: "3A000000"
    },
    { 
        name: "Hero",
        head: "36400000"
    },
    { 
        name: "Banjo & Kazooie",
        head: "3B400000"
    },
    { 
        name: "Terry",
        head: "3C800000"
    },
    { 
        name: "Byleth",
        head: "210B0000"
    },
    { 
        name: "MinMin",
        head: "-1"
    },
    { 
        name: "Steve",
        head: "-1"
    },
    { 
        name: "Sephiroth",
        head: "-1"
    },
    { 
        name: "Pyra Mythra",
        head: "-1"
    },
    { 
        name: "Kazuya",
        head: "-1"
    },
    { 
        name: "Mii Brawler",
        head: "07C00000"
    },
    { 
        name: "Mii Swordfighter",
        head: "07C00100"
    },
    { 
        name: "Mii Gunner",
        head: "07C00200"
    },




]

function getCharacterHead(name)
{
    for(let character of OBJ_ARRAY)
    {
        if(name === character.name)
        {
            return character.head;
        }
    }
    return "-1";
}

function getFlagLink(country) //get flag icon link from abbreviation
{
    if(country === "au")
    {
        return 'images/australian-flag.png';
    }
    else if(country === "eu")
    {
        return 'images/european-union-flag.png';
    }
    else if(country === "jp")
    {
        return 'images/japanese-flag.png';
    }
    else if(country === "na")
    {
        return 'images/american-flag.png';
    }
    else
    {
        return "Country Not Found";
    }
}

function getCountryName(country) //get full country name from abbbreviation
{
    if(country === "au")
    {
        return "Australia";
    }
    else if(country === "eu")
    {
        return "Europe";
    }
    else if(country === "jp")
    {
        return "Japan";
    }
    else if(country === "na")
    {
        return "North America";
    }
    else
    {
        return "Country Not Found";
    }
    
}

function removeChildNodes(node) // removes child nodes from element
{
    while(node.firstChild)
    {
        node.removeChild(node.firstChild);
    }
}

function resetData() //calls removeChildNodes on needed divs
{
    removeChildNodes(imageBox);
    removeChildNodes(nameBox);
    removeChildNodes(releaseBox);
}


//define constants for important html elements
const selectBox = document.getElementById("char-options");
const amiiboBox = document.getElementById("amiibo-box");
const imageBox = document.getElementById("image-box");
const infoBox = document.getElementById("info-box");
const nameBox = document.getElementById("name-box");
const releaseBox = document.getElementById("release-box");

for(let character of OBJ_ARRAY) //Populate drop-down menu with character choices
{
    let newOption = document.createElement("option");
    newOption.value = character.name;
    newOption.innerText = character.name;

    selectBox.appendChild(newOption);
}

async function fetchAmiiboData(url) //Async function to fetch the data from the API and return the json object
{
    try {
        const responseData = await fetch(url).then((response) => response.json());
        console.log(responseData);
        return responseData.amiibo[0];
    }
    catch(err)
    {
        console.log(`Something went wrong... ${err}`);
        return;
    }  
}

async function fillInAmiiboHtml(data) //Take in the character name and then fill in correspoding HTML
{   
    if(amiiboBox.childElementCount > 0)
    {
        resetData();
        
        if(document.getElementById("default-text") !== null)
        {
            document.getElementById("default-text").remove();
        }
    }

    let url = "https://www.amiiboapi.com/api/amiibo/?head=" + getCharacterHead(data);

    let amiiboData = await fetchAmiiboData(url);

    if(amiiboData !== undefined)
    {
        amiiboBox.style.justifyContent = "space-evenly";

        console.log(amiiboData);

        //create image element and change src to amiibo image
        let charImage = document.createElement('img');
        charImage.src = amiiboData["image"];
        charImage.class = "char-image";

        //append image to image-box div
        imageBox.appendChild(charImage);

        console.log(amiiboData);

        //create name and series text
        let nameText = document.createTextNode(amiiboData["character"]);
        let nameElement = document.createElement("h1");
        //nameElement.className = "name-text";

        let seriesText = document.createTextNode(`Game Series: ${amiiboData["gameSeries"]}`);
        let seriesElement = document.createElement("h5");
        
        //append name/series nodes
        nameElement.appendChild(nameText);
        seriesElement.appendChild(seriesText);
        nameBox.appendChild(nameElement);
        nameBox.appendChild(seriesElement);

        let releaseDatesText = document.createTextNode("Amiibo Release Dates:");
        let releaseDates = document.createElement("p");
        releaseDates.id = "release-dates-text";
        releaseDates.appendChild(releaseDatesText);

        releaseBox.appendChild(releaseDates);

        //create and append release dates
        for(let date in amiiboData.release)
        {
            let releaseDiv = document.createElement("div");
            releaseDiv.className = "release-inner-box";

            let flagIcon = document.createElement("img");
            flagIcon.src = getFlagLink(date);

            let dateText = document.createTextNode(`${getCountryName(date)} - ${amiiboData.release[date]}`);
            let dateElement = document.createElement("p");
            dateElement.appendChild(dateText);

            releaseDiv.appendChild(flagIcon);
            releaseDiv.appendChild(dateElement);

            releaseBox.appendChild(releaseDiv);



        }
    }  
}


//Add click event to 'get' button to fill in chosen character data
document.getElementById("get-button").addEventListener("click", () => {
    fillInAmiiboHtml(selectBox.value)
});



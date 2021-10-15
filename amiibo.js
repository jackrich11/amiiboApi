const CHAR_ARRAY = ["Mario", "Donkey Kong", "Link", "Samus", "Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi",
"Ness", "Captain Falcon", "Jigglypuff", "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik",
"Zelda", "Dr Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo",
"Roy", "Chrom", "Mr Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario",
"Snake", "Ike", "Pokémon Trainer", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario",
"ROB", "Toon Link", "Wolf", "Villager", "Mega Man", "Rosalina", "Wii Fit Trainer", "Litle Mac",
"Greninja", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud",
"Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K Rool", "Incineroar", 
"Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "MinMin", "Steve", "Sephiroth",
"Pyra Mythra", "Kazuya", "Mii Brawler", "Mii Swordsman", "Mii Gunner" ]

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
        head: ""
    },
    { 
        name: "Zelda",
        head: ""
    },
    { 
        name: "Dr Mario",
        head: ""
    },
    { 
        name: "Pichu",
        head: ""
    },
    { 
        name: "Falco",
        head: ""
    },
    { 
        name: "Marth",
        head: ""
    },
    { 
        name: "Lucina",
        head: ""
    },
    { 
        name: "Young Link",
        head: ""
    },
    { 
        name: "Ganondorf",
        head: ""
    },
    { 
        name: "Mewtwo",
        head: ""
    },
    { 
        name: "Roy",
        head: ""
    },
    { 
        name: "Chrom",
        head: ""
    },
    { 
        name: "Mr Game & Watch",
        head: ""
    },
    { 
        name: "Meta Knight",
        head: ""
    },
    { 
        name: "Pit",
        head: ""
    },
    { 
        name: "Dark Pit",
        head: ""
    },
    { 
        name: "Zero Suit Samus",
        head: ""
    },
    { 
        name: "Wario",
        head: ""
    },
    { 
        name: "Snake",
        head: ""
    },
    { 
        name: "Ike",
        head: ""
    },
    { 
        name: "Pokémon Trainer",
        head: ""
    },
    { 
        name: "Diddy Kong",
        head: ""
    },
    { 
        name: "Lucas",
        head: ""
    },
    { 
        name: "Sonic",
        head: ""
    },
    { 
        name: "King Dedede",
        head: ""
    },
    { 
        name: "Olimar",
        head: ""
    },
    { 
        name: "Lucario",
        head: ""
    },
    { 
        name: "ROB",
        head: ""
    },
    { 
        name: "Toon Link",
        head: ""
    },
    { 
        name: "Wolf",
        head: ""
    },
    { 
        name: "Villager",
        head: ""
    },
    { 
        name: "Mega Man",
        head: ""
    },
    { 
        name: "Rosalina",
        head: ""
    },
    { 
        name: "Wii Fit Trainer",
        head: ""
    },
    { 
        name: "Little Mac",
        head: ""
    },
    { 
        name: "Greninja",
        head: ""
    },
    { 
        name: "Palutena",
        head: ""
    },
    { 
        name: "Pac-Man",
        head: ""
    },
    { 
        name: "Robin",
        head: ""
    },
    { 
        name: "Shulk",
        head: ""
    },
    { 
        name: "Bowser Jr",
        head: ""
    },
    { 
        name: "Duck Hunt",
        head: ""
    },
    { 
        name: "Ryu",
        head: ""
    },
    { 
        name: "Ken",
        head: ""
    },
    { 
        name: "Cloud",
        head: ""
    },
    { 
        name: "Corrin",
        head: ""
    },
    { 
        name: "Bayonetta",
        head: ""
    },
    { 
        name: "Inkling",
        head: ""
    },
    { 
        name: "Ridley",
        head: ""
    },
    { 
        name: "Simon",
        head: ""
    },
    { 
        name: "Richter",
        head: ""
    },
    { 
        name: "King K Rool",
        head: ""
    },
    { 
        name: "Incineroar",
        head: ""
    },
    { 
        name: "Piranha Plant",
        head: ""
    },
    { 
        name: "Joker",
        head: ""
    },
    { 
        name: "Hero",
        head: ""
    },
    { 
        name: "Banjo & Kazooie",
        head: ""
    },
    { 
        name: "Terry",
        head: ""
    },
    { 
        name: "Byleth",
        head: ""
    },
    { 
        name: "MinMin",
        head: ""
    },
    { 
        name: "Steve",
        head: ""
    },
    { 
        name: "Sephiroth",
        head: ""
    },
    { 
        name: "Pyra Mythra",
        head: ""
    },
    { 
        name: "Kazuya",
        head: ""
    },
    { 
        name: "Mii Brawler",
        head: ""
    },
    { 
        name: "Mii Swordsman",
        head: ""
    },
    { 
        name: "Mii Gunner",
        head: ""
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



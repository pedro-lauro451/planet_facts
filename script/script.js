const mercury = document.getElementById('mercury');
const venus = document.getElementById('venus');
const earth = document.getElementById('earth');
const mars = document.getElementById('mars');
const jupiter = document.getElementById('jupiter');
const saturn = document.getElementById('saturn');
const uranus = document.getElementById('uranus');
const neptune = document.getElementById('neptune');

var planetName = document.getElementById('planetName');
var overview = document.getElementById('overview');
var internalStructure = document.getElementById('internalStructure');
var surfaceGeology = document.getElementById('surfaceGeology');
var sourceURL = document.getElementById('sourceURL');
var rotationTime = document.getElementById('rotationTime');
var revolutionTime = document.getElementById('revolutionTime');
var radius = document.getElementById('radius');
var averageTemp = document.getElementById('averageTemp');

var overviewPath = document.getElementById('overviewPath');
var internalStructurePath = document.getElementById('internalStructurePath');
var surfaceGeologyPath = document.getElementById('surfaceGeologyPath');

var overviewSelect = document.getElementById('overview-select');
var structureSelect = document.getElementById('internal-structure-select');
var geologySelect = document.getElementById('surface-geology-select');

internalStructurePath.style.display = "none";
surfaceGeologyPath.style.display = "none";

internalStructure.style.display = "none";
surfaceGeology.style.display = "none";

const elements = ["overviewPath", "internalStructurePath", "surfaceGeologyPath"];
var visibleElement = null;

const textElements = ["overview", "internalStructure", "surfaceGeology"];
var visibleTextElement = null;

const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
var active = false;

var colors = ["#6999aa","#e29f58","#4d53ea","#bf3c32","#d86534","#ecb55a","#43bbb2","#2255ca"];

hamburger.onclick = function()
{
    if(active === false)
    {
        menu.style.display = "flex";
        active = true;
    }
    else
    {
        menu.style.display = "none";
        active = false;
    }
};

function handleScreenChange()
{
    if(window.innerWidth > 921)
    {
        menu.style.display = "flex";
        active = true;
    }
};

window.addEventListener('resize',handleScreenChange);

function hideAll(array,visibleElement,display)
{
    var i, id, element;
    for(i = 0; i < array.length; i++)
    {
        id = array[i];
        element = document.getElementById(id);
        if(visibleElement === id)
        {
            element.style.display = display;
        }
        else
        {
            element.style.display = "none";
        }
    }
};

function togglesElement(id,visibleElement,array,display)
{
   if(id === visibleElement)
   {
        visibleElement = null;
   }
   else
   {
        visibleElement = id;
   }
   hideAll(array,visibleElement,display);
};

function toggleVisibility(id, textId)
{
   togglesElement(id,visibleElement,elements,"initial");
   togglesElement(textId,visibleTextElement,textElements,"flex");
};

function fetchData(arrayPosition)
{
    fetch('./json/planets.json')
    .then(response => {
        return response.json()})
    .then(planetData => {
        planetName.innerHTML = planetData.planets[arrayPosition].name;
        overview.innerHTML = planetData.planets[arrayPosition].overview;
        internalStructure.innerHTML = planetData.planets[arrayPosition].internalStructure;
        surfaceGeology.innerHTML = planetData.planets[arrayPosition].surfaceGeology;
        sourceURL.href = planetData.planets[arrayPosition].sourceURL;
        rotationTime.innerHTML = planetData.planets[arrayPosition].rotationTime;
        revolutionTime.innerHTML = planetData.planets[arrayPosition].revolutionTime;
        radius.innerHTML = planetData.planets[arrayPosition].radius;
        averageTemp.innerHTML = planetData.planets[arrayPosition].averageTemp;
        overviewPath.src = planetData.planets[arrayPosition].overviewPath;
        internalStructurePath.src = planetData.planets[arrayPosition].internalStructurePath;
        surfaceGeologyPath.src = planetData.planets[arrayPosition].surfaceGeologyPath;
    });
};

fetchData(2);

var content = 2;

function renderPlanetInfo(selectedPlanet)
{
    switch(selectedPlanet)
    {
        case "mercury":
            fetchData(0);
            content = 0;
            break;
        case "venus":
            fetchData(1);
            content = 1;
            break;
        case "earth":
            fetchData(2);
            content = 2;
            break;
        case "mars":
            fetchData(3);
            content = 3;
            break;
        case "jupiter":
            fetchData(4);
            content = 4;
            break;
        case "saturn":
            fetchData(5);
            content = 5;
            break;
        case "uranus":
            fetchData(6);
            content = 6;
            break;
        case "neptune":
            fetchData(7);
            content = 7;
            break;
    }
};

mercury.onclick = function()
{
    renderPlanetInfo("mercury");
};

mercury.onmouseover = function()
{
    mercury.setAttribute("style", "background-color:" + colors[0]);
}

mercury.onmouseleave = function()
{
    mercury.setAttribute("style", "background-color: transparent");
}

venus.onclick = function()
{
    renderPlanetInfo("venus");
}

venus.onmouseover = function()
{
    venus.setAttribute("style", "background-color:" + colors[1]);
}

venus.onmouseleave = function()
{
    venus.setAttribute("style", "background-color: transparent");
}

earth.onclick = function()
{
    renderPlanetInfo("earth");
}

earth.onmouseover = function()
{
    earth.setAttribute("style", "background-color:" + colors[2]);
}

earth.onmouseleave = function()
{
    earth.setAttribute("style", "background-color: transparent");
}

mars.onclick = function()
{
    renderPlanetInfo("mars");
}

mars.onmouseover = function()
{
    mars.setAttribute("style", "background-color:" + colors[3]);
}

mars.onmouseleave = function()
{
    mars.setAttribute("style", "background-color: transparent");
}

jupiter.onclick = function()
{
    renderPlanetInfo("jupiter");
}

jupiter.onmouseover = function()
{
    jupiter.setAttribute("style", "background-color:" + colors[4]);
}

jupiter.onmouseleave = function()
{
    jupiter.setAttribute("style", "background-color: transparent");
}

saturn.onclick = function()
{
    renderPlanetInfo("saturn");
}

saturn.onmouseover = function()
{
    saturn.setAttribute("style", "background-color:" + colors[5]);
}

saturn.onmouseleave = function()
{
    saturn.setAttribute("style", "background-color: transparent");
}

uranus.onclick = function()
{
    renderPlanetInfo("uranus");
}

uranus.onmouseover = function()
{
    uranus.setAttribute("style", "background-color:" + colors[6]);
}

uranus.onmouseleave = function()
{
    uranus.setAttribute("style", "background-color: transparent");
}

neptune.onclick = function()
{
    renderPlanetInfo("neptune");
}

neptune.onmouseover = function()
{
    neptune.setAttribute("style", "background-color:" + colors[7]);
}

neptune.onmouseleave = function()
{
    neptune.setAttribute("style", "background-color: transparent");
}

overviewSelect.onmouseover = function()
{
    overviewSelect.setAttribute("style", "background-color:" + colors[content] + ";border-color:" + colors[content]);
}

overviewSelect.onmouseleave = function()
{
    overviewSelect.setAttribute("style", "background-color: transparent; border-color: #272644");
}

structureSelect.onmouseover = function()
{
    structureSelect.setAttribute("style", "background-color:" + colors[content] + ";border-color:" + colors[content]);
}

structureSelect.onmouseleave = function()
{
    structureSelect.setAttribute("style", "background-color: transparent; border-color: #272644");
}

geologySelect.onmouseover = function()
{
    geologySelect.setAttribute("style", "background-color:" + colors[content] + ";border-color:" + colors[content]);
}

geologySelect.onmouseleave = function()
{
    geologySelect.setAttribute("style", "background-color: transparent; border-color: #272644");
}
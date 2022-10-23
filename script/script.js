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

function renderPlanetInfo(selectedPlanet)
{
    switch(selectedPlanet)
    {
        case "mercury":
            fetchData(0);
            break;
        case "venus":
            fetchData(1);
            break;
        case "earth":
            fetchData(2);
            break;
        case "mars":
            fetchData(3);
            break;
        case "jupiter":
            fetchData(4);
            break;
        case "saturn":
            fetchData(5);
            break;
        case "uranus":
            fetchData(6);
            break;
        case "neptune":
            fetchData(7);
            break;
    }
};

mercury.onclick = function()
{
    renderPlanetInfo("mercury");
};

venus.onclick = function()
{
    renderPlanetInfo("venus");
}

earth.onclick = function()
{
    renderPlanetInfo("earth");
}

mars.onclick = function()
{
    renderPlanetInfo("mars");
}

jupiter.onclick = function()
{
    renderPlanetInfo("jupiter");
}

saturn.onclick = function()
{
    renderPlanetInfo("saturn");
}

uranus.onclick = function()
{
    renderPlanetInfo("uranus");
}

neptune.onclick = function()
{
    renderPlanetInfo("neptune");
}
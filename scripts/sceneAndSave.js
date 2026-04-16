export function generateScene(scene){
    const background = document.getElementById("scene");
    background.style.background(`url(${scene.background})`);
};

export function generateOptions(options){
    options.forEach(option => {
        option = document.createElement("button");

    });
}

export function advanceText(textArray){ //will take array of story
    if (!isReading) return; //clicking when options are on screen will not advance the text

    let numberOfClicksAvailable = textArray.length; //clicks to advance through array
}
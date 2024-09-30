chrome.runtime.sendMessage({todo:"showPageAction"});

function hideYouTubeShorts() {
    let elements = document.querySelectorAll('[is-shorts], ytd-reel-shelf-renderer');
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none'; 
    }
}

hideYouTubeShorts();

setInterval(hideYouTubeShorts, 1000); 
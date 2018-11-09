const logWhenReady = ( () => {
    let queue = [];
    let domReady = false;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", function(event) {
            //console.log("DOM fully loaded and parsed");
            domReady = true;
            flushQueue();
        });
    } else {
        domReady = true;
    }

    return addToLogQueue;

    function flushQueue () {
        if (domReady) {
            while (queue.length) {
                let {message} = queue.shift();
                logToDocument({message});
            };
        }
    }

    function addToLogQueue ({message}) {
        queue.push({message});
        flushQueue();
    }
})();


logWhenReady({message: 'index.js has loaded'})

if ('import' in document.createElement('link')) {
    logWhenReady({message: 'HTML imports are supported!'});
} else {
    logWhenReady({message: 'HTML imports are not supported.'});
}

// var htmlImport = document.querySelector('link[rel="import"]');
// var htmlDoc = htmlImport.import;
// var htmlMessage = htmlDoc.querySelector('.message-success');
// document.body.appendChild(htmlMessage.cloneNode(true));



// Handle Loaded Templates.
function templatesLoaded(event) {
    logWhenReady({message: 'Templates loaded.'});
}

// Handle Errors.
function templatesFailed(event) {
    logWhenReady({message: 'Templates could not be loaded.'});
}

function logToDocument({message}) {
    let li = document.createElement('li');

    li.innerHTML = message;

    const logBodyEl = document.getElementById('logList');
    logBodyEl.appendChild(li);

}
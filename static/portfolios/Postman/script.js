console.log('Post Man');


// let param = [document.getElementById('parametersBox').innerHTML];
let pramArr = [];
let pram = ''
let pramHtml = document.getElementById('params');
let addedParamCount = 0;
document.getElementById('addParam').addEventListener('click', () => {
    if(pramArr.length == 0){
        addedParamCount = 0;
    }
    pram = `
    <div class="form-row my-3">
        <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount+2}:</label>
        <div class="col-md-4">
            <input type="text" class="form-control" id="parameterKey${addedParamCount+2}" placeholder="Enter Parameter ${addedParamCount+2} Key">
        </div>
        <div class="col-md-4">
        <input type="text" class="form-control" id="parameterValue${addedParamCount+2}" placeholder="Enter Parameter ${addedParamCount+2} Value">
        </div>
        <button id="rmPram${addedParamCount+2}" class="btn btn-primary deleteParam">-</button>
    </div>`
    pramArr.push(pram)
    console.log(pramArr)
    pramHtml.innerHTML += pram;
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    }
    addedParamCount++;
});
let contentType = 'json';
document.getElementById('parametersBox').style.display = 'none';
document.getElementById('jsonRadio').addEventListener('click', () => {
    contentType = 'json';
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';

});
document.getElementById('paramsRadio').addEventListener('click', () => {
    contentType = 'parameter';
    document.getElementById('parametersBox').style.display = 'block';
    document.getElementById('requestJsonBox').style.display = 'none';
});

document.getElementById('alert-success').style.display = 'none';
document.getElementById('alert-warning').style.display = 'none';
document.getElementById('alert-danger').style.display = 'none';
document.getElementById('submit').addEventListener('click', () => {
    let url = document.getElementById('url').value;
    let requestType = document.getElementById('get').checked ? 'GET' : document.getElementById('post').checked = 'POST';
    let data;
    let urlRegex = /^[(http(s)?):\/\/]/
    if (urlRegex.test(url) == false){
        document.getElementById('alert-warning').style.display = 'block';
        setTimeout(() => {
            document.getElementById('alert-warning').style.display = 'none';
        }, 5000);
        return;
    }
    if(contentType == 'json'){
        data = document.getElementById('requestJsonText').value;
    }
    else{
        data = {};
        for (let i = 0; i < addedParamCount + 1; i++) {
            if(document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById(`parameterKey${i + 1}`).value;
                let value = document.getElementById(`parameterValue${i + 1}`).value;
                data[key] = value;
            }
        }
        console.log(data)
    }
    let xhr = new XMLHttpRequest();
    if (requestType == "GET") {
        document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";
        xhr.open("GET", url, true);
        xhr.send();
    }
    else {
        document.getElementById('responsePrism').innerHTML = "Please wait.. Fetching response...";
        xhr.open("POST", url, true);
        xhr.getResponseHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.getElementById('responsePrism').innerHTML = xhr.responseText;
            console.log(xhr.responseText)
            document.getElementById('alert-success').style.display = 'block';
            setTimeout(() => {
                document.getElementById('alert-success').style.display = 'none';
            }, 5000);
            Prism.highlightAll();
        }
        else {
            document.getElementById('responsePrism').innerHTML = `${xhr.status} Error Occured`;
            document.getElementById('alert-danger').style.display = 'block';
            setTimeout(() => {
                document.getElementById('alert-danger').style.display = 'none';
            }   , 5000);
        }
    }
});
Prism.highlightAll();

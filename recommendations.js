window.onload = function() {
    let list = new XMLHttpRequest();
    list.open('GET', 'jsons/list.json', true);
    list.onload = function () {
        if (list.status >= 200 && list.status < 400) {
            for (let file of JSON.parse(list.responseText)) {
                let option = document.createElement('option');
                option.value = file;
                option.innerHTML = file;
                document.getElementById('userSelect').appendChild(option);
            }
        }
        regenList();
    }
    list.send();
}

function regenList() {
    let file = document.getElementById('userSelect').value;
    let request = new XMLHttpRequest();
    request.open('GET', 'jsons/' + file, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let data = JSON.parse(request.responseText);
            let username = data.username;
            let itemIds = data.item_id_interactions;
            let recommendations = data.recommendations;
            let header = document.getElementById('header');
            let interactionsDiv = document.getElementById('interacted');
            let recommendationsDiv = document.getElementById('recommended');
            header.innerHTML = '<h1> Recommendations for ' + username + '</h1>';
            interactionsDiv.innerHTML = '';
            recommendationsDiv.innerHTML = '';
            for (let i = 0; i < Math.min(5, itemIds.length); i++) {
                let item = document.createElement('div');
                item.style.display = 'inline-block';
                item.style.verticalAlign = 'top';
                let img = document.createElement('img');
                img.style.width = '200px';
                img.style.height = '200px';
                img.id = 'img_interacted_' + i;
                item.appendChild(img);
                let text = document.createElement('p');
                text.style.width = '200px';
                text.style.overflowWrap = 'break-word';
                text.id = 'text_interacted_' + i;
                item.appendChild(text);
                getXmlBGG(itemIds[i], function (xml) {
                    let img = document.getElementById('img_interacted_' + i);
                    let text = document.getElementById('text_interacted_' + i);
                    img.src = xml.getElementsByTagName('thumbnail')[0].innerHTML;
                    text.innerHTML = "<i><b>" + xml.getElementsByTagName('name')[0].getAttribute("value") + '</b> was interacted with by you.</i>'
                });
                interactionsDiv.appendChild(item);
            }
            for (let j = 0; j < Math.min(5, recommendations.length); j++) {
                let recommendation = recommendations[j];
                recommendationsDiv.innerHTML += '<h3>' + recommendation.name + '</h3>';
                let items = recommendation.items;
                for (let i = 0; i < Math.min(5, items.length); i++) {
                    let item = document.createElement('div');
                    item.style.display = 'inline-block';
                    item.style.verticalAlign = 'top';
                    let img = document.createElement('img');
                    img.style.width = '200px';
                    img.style.height = '200px';
                    img.id = 'img_recommended_' + j + '_' + i;
                    item.appendChild(img);
                    let text = document.createElement('p');
                    text.style.width = '200px';
                    text.style.overflowWrap = 'break-word';
                    text.id = 'text_recommended_' + j + '_' + i;
                    item.appendChild(text);
                    getXmlBGG(items[i].item_id, function (xml) {
                        let img = document.getElementById('img_recommended_' + j + '_' + i);
                        let text = document.getElementById('text_recommended_' + j + '_' + i);
                        img.src = xml.getElementsByTagName('thumbnail')[0].innerHTML;
                        text.innerHTML = "<i><b>" + xml.getElementsByTagName('name')[0].getAttribute("value") + '</b> was recommended to you because: </i><br/>' + items[i].text;
                    });
                    recommendationsDiv.appendChild(item);
                }
            }
        }
    }
    request.send();
}

function getXmlBGG(item_id, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://www.boardgamegeek.com/xmlapi2/thing?id=' + item_id, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            callback(request.responseXML);
        }
    }
    request.send();
}
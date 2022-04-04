var urlSearchParams = new URLSearchParams(window.location.search);
var activeChunkSize = urlSearchParams.get('size') || 6;
document.querySelector('#divs option[value="' + activeChunkSize + '"]').setAttribute('selected', true);
document.querySelector('#radius').setAttribute('value', urlSearchParams.get('radius') || '150');
document.querySelector('#arcWidth').setAttribute('value', urlSearchParams.get('width') || '20');
document.querySelector('#duration').setAttribute('value', urlSearchParams.get('duration') || '100');
setChunks = function(e) {
    urlSearchParams.set('size', e.value);
    setUrl();
};
setRadius = function(e) {
    var value = +e.value > 250 || +e.value < 150 ? 150 : +e.value;
    urlSearchParams.set('radius', value);
    setUrl();
};
setArcWidth = function(e) {
    var value = +e.value > 100 || +e.value < 20 ? 20 : +e.value;
    urlSearchParams.set('width', value);
    setUrl();
};
setDuration = function(e) {
    var value = +e.value < 100 ? 100 : +e.value;
    urlSearchParams.set('duration', value);
    setUrl();
};
setUrl = function() {
    window.location.replace("?".concat(urlSearchParams.toString()));
};

//# sourceMappingURL=index.d4d092ba.js.map

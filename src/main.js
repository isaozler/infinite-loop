const urlSearchParams = new URLSearchParams(window.location.search)
let activeChunkSize = urlSearchParams.get('size') || 6

document.querySelector('#divs option[value="' + activeChunkSize + '"]').setAttribute('selected', true)
document.querySelector('#radius').setAttribute('value', urlSearchParams.get('radius') || '150')
document.querySelector('#arcWidth').setAttribute('value', urlSearchParams.get('width') || '20')
document.querySelector('#duration').setAttribute('value', urlSearchParams.get('duration') || '100')

setChunks = (e) => {
  urlSearchParams.set('size', e.value)
  setUrl()
}

setRadius = (e) => {
  const value = +e.value > 250 || +e.value < 150 ? 150 : +e.value
  urlSearchParams.set('radius', value)
  setUrl()
}

setArcWidth = (e) => {
  const value = +e.value > 100 || +e.value < 20 ? 20 : +e.value
  urlSearchParams.set('width', value)
  setUrl()
}

setDuration = (e) => {
  const value = +e.value < 100 ? 100 : +e.value
  urlSearchParams.set('duration', value)
  setUrl()
}

setUrl = () => {
  window.location.replace(`?${urlSearchParams.toString()}`)
}
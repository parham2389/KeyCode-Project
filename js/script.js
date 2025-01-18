let $ = document
let asciiCode = $.querySelector('#keyCode')
let key = $.querySelector('#key')
let locationKey = $.querySelector('#location')
let which = $.querySelector('#which')
let code = $.querySelector('#code')
let title = $.querySelector('title')

document.body.addEventListener('keydown', function (event) {
	asciiCode.innerHTML = event.keyCode
	key.innerHTML = event.key
	locationKey.innerHTML = event.location
	which.innerHTML = event.which
	code.innerHTML = event.code
	// console.log(event);
	event.preventDefault()
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'
})
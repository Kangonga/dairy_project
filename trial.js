const container = document.querySelector('.container')

const divtrial = document.createElement('div')
document.querySelector('.container').insertBefore(divtrial, document.querySelector('.content'))

divtrial.setAttribute('class', 'divtrial')

const paragraph = document.createElement('p');
paragraph.innerText = 'Hey I am red'
document.querySelector('.reports').appendChild(paragraph)
paragraph.innerText = "Hello there"

const header = document.createElement('h1')
header.innerText = 'I am a blue header'
document.querySelector('.reports').appendChild(header)
header.setAttribute('style', 'color:darkgray; font-size:2rem;', )
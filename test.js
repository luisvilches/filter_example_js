console.log('hi')
var com = new Frame({
    name: "first",
    state: {
        data: 'hi'
    }
})

com.componente(`<div>
    <span>I'm a widget ${ props.welcome }</span>
</div>*/`)

var com2 = new Frame({
    name: 'com2'
})

com.componente(`<first welcome="Hello world" />`)

render('root',`<com2 />`)

console.log(com.name)

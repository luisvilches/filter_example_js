
var datos = [
    {imagen: 'img/prueba.png', titulo: 'MARKETING DIGITAL', link: '#', category: 'MARKETING'},
    {imagen: 'img/prueba.png', titulo: 'CONTABILIDAD Y FINANZAS', link: '#', category: 'EMPRESAS'},
    {imagen: 'img/prueba.png', titulo: 'METODOLOGÍAS GRUPALES', link: '#', category: 'EDUCACIÓN'},
    {imagen: 'img/prueba.png', titulo: 'HABILIDADES BLANDAS', link: '#', category: 'EMPRESAS'},
    {imagen: 'img/prueba.png', titulo: 'BRANDING CORPORATIVO', link: '#', category: 'EMPRESAS'},
    {imagen: 'img/prueba.png', titulo: 'ORIENTACIÓN DOCENTE', link: '#', category: 'EDUCACIÓN'},
    {imagen: 'img/prueba.png', titulo: 'PERMACULTURA', link: '#', category: 'EDUCACIÓN'},
    {imagen: 'img/prueba.png', titulo: 'SERVICIOS DE LA EMPRESA', link: '#', category: 'EMPRESAS'},
    {imagen: 'img/prueba.png', titulo: 'IDIOMAS', link: '#', category: 'EDUCACIÓN'},
    {imagen: 'img/prueba.png', titulo: 'OFICIOS', link: '#', category: 'EDUCACIÓN'},
    {imagen: 'img/prueba.png', titulo: 'TELECOMUNICACIONES', link: '#', category: 'EDUCACIÓN'},
    {imagen: 'img/prueba.png', titulo: 'DESARROLLO WEB', link: '#', category: 'EDUCACIÓN'}
];

var Servicios = new Data(datos);

// btn filter id

var all = document.getElementById('filterAll');
var marketing = document.getElementById('filterMarketing');
var educacion = document.getElementById('filterEducacion');
var empresa = document.getElementById('filterEmpresas');


// btn filter functions

all.onclick = function(){
    Servicios.filters('');
    change();
};
marketing.addEventListener("click", function(){
    Servicios.filters('MARKETING');
    change();
});

educacion.addEventListener("click", () => {
    Servicios.filters('EDUCACIÓN');
    change();
});

empresa.addEventListener("click", function(){
    Servicios.filters('EMPRESAS');
    change();
});

document.addEventListener("load", change());

function test(msg){
    console.log(msg)
}

var na = "hola";

function change(){
   var componentService = Servicios.iterar((item) => {
    return  `
        <div class="col-lg-3">
            <div class="category text-center">
                <div id="content" class="center-block">
                    <img class="img-circle" src="${item.imagen}" alt="Generic placeholder image" width="100" height="100">
                </div>
                <h5><strong>${item.titulo}</strong></h5>
                <p><a class="btn btn-info" href=${item.link} ${console.warn("this es",this.onclick.test.bind(this))} role="button">VER MÁS »</a></p>
            </div>
        </div>`
});

    var test = Servicios.iterar((item) => {
        return  `<h5><strong>${item.titulo}</strong></h5>`
    });

    Servicios.render('Servicios',componentService)
}

console.log(Servicios.getData());



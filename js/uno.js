const meses=['Enero','Febrero','Marzo','Abril','Mayo']

const carrito=[
    {nombre:'Monitor 20pulgadas',precio:500 },
    {nombre:'Televicion de 50 pulgdas ',precio:700 },
    {nombre:'Tablet',precio:300 },
    {nombre:'Audifonos',precio:200 },
    {nombre:'Teclado',precio:150 },
    {nombre:'celular',precio:1500 },
];

//for each
meses.forEach(function(meses){
    if(meses=='Marzo'){
        console.log('Marzo si existe');
    }

});

//Includes
const resultado = meses.includes('Diciembre');
//some ideal para arreglos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre === 'celular PRO'
})


console.log(resultado)
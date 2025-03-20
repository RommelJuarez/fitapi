const swaggerAutogen= require('swagger-autogen')();

const doc={
    info:{
        title:'FITAPI',
        description:'FITAPI api documentation'
    },
    host:'localhost:8080',
    schemes:['http','https'],
    tags:[{name:'Users'},{name:'Exercises'}]
};
const outputFile='./swagger.json';
const endpointsFiles=['./routes/index.js'];
swaggerAutogen(outputFile,endpointsFiles,doc);

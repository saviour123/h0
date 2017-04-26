import Hapi from 'hapi';
const server = new Hapi.Server();


server.connection({port: 1337});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('hello world');
    }
});


//start server
server.start((err) => {
    if(err){
        throw err;
    }
    console.log('server started my saviour:' + server.info.uri);
    console.log('server started my saviour:' + server.info.protocol);
    console.log('server started my saviour:' + server.info.address);
    console.log('server started my saviour:' + server.info.host);
    console.log('server started by saviour:' + server.info.id);
    console.log('server started by saviour:' + server.info.started);


});

const hapi = require('hapi');

// Create server connection instance
const server = new hapi.server();

server.connection({ 
    // host: '127.0.0.1',
    port: 3000
});


// view engine [handlebars]
server.views({
    engines: {
        html: require('handlebars');
    },
    path: 'views',
    layoutPath: 'views/layout',
    layout: 'default',
    //helpersPath: 'views/helpers',
    //partialsPath: 'views/partials'
});

var routes = [
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply){
        var data = {
            title: 'This is index',
            message: 'Hello world, handlebars things'
        };

        return reply.view('index', data);
        }
    }
];


server.route(routes);
server.start(function(){
    console.log('server started at: ' + server.info.uri);
});



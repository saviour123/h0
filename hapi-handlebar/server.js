const Hapi = require('hapi');
// const handlerbars = require('handlebars');
// Create server connection instance
const server = new Hapi.Server();
server.connection({ port: 3000 });

const handler = function(request, reply){

};

server.register(require('vision'), (err) => {
  if(err){
    console.log(err);
  }
  // view engine [handlebars]
  server.views({
      engines: {
          html: require('handlebars')
      },
      path: './views',
      layoutPath: './views/layout',
      layout: 'default',
      helpersPath: './views/helpers',
      partialsPath: './views/partials'
  });

  server.route({
          method: 'GET',
          path: '/',
          handler: function(request, reply){
          var data = {
              title: 'This is index',
              message: 'Hello world, handlebars things'
          };

          return reply.view('index', data);
          }
      });

});

server.start(function(){
    console.log('server started at: ' + server.info.uri);
});

/*!
 * A simple Hello World CLI.
 */

// Pronto itself.
var pronto = require('pronto');

// A testing command.
var Hello = pronto.commands.Hello;

// The registry. This defines all of the
// routes that the app knows about.
var registry = new pronto.Registry();

// The router is what runs commands.
var router = new pronto.Router(registry);

// Code will go here
registry.route('hello')
  .does(Hello)
  .does(Hello)
  .does(Hello)


// This is how we run a command. You could
// get this info from ARGV or some other
// source, but we hard code it here.
router.handleRequest('hello');

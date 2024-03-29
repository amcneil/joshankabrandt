import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path:'/' })
  this.route('about', { path: '/about' });
  this.route('performances', { path: '/performances' });
  this.route('gallery', { path: '/gallery' });
  this.route('contact', { path: '/contact' });
  this.route('video');
  this.route('show-times', { path:'/show-times' });
  this.route('blog', { path:'/blog' });
});

export default Router;

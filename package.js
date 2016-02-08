Package.describe({
	name: 'rwatts:slick-block-wrapper',
	version: '0.1.0',
	// Brief, one-line summary of the package.
	summary: 'Slick Block Wrapper, Enables a quick block template to use with slickjs.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/rwatts3/meteor-slick-block-wrapper',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  
	api.use([
		'less@2.5.1',
		'shcherbin:slickjs',
		'templating'
	]);
  
  api.addFiles([
	  'slick-block-wrapper.html',
	  'slick-block-wrapper.js',
	  'slick-block-wrapper.less'
  ], 'client');
  
  api.imply('shcherbin:slickjs');
  
});

Package.onTest(function(api) {
	api.use('ecmascript');
	api.use('tinytest');
	api.addFiles('slick-block-wrapper-tests.js');
});

Package.describe({
	name: 'orionjs:bootstrap',
	summary: 'Meteor CMS Styled for bootstrap',
	version: '0.0.1',
	git: 'https://github.com/orionjs/bootstrap'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0');

	api.use([
		'orionjs:core@0.5.0',
		'less',
		]);

	api.imply([
		'orionjs:core',
		'less'
		]);

	api.addFiles([
		'styles/files.less',
		'styles/forms.less',
		'styles/layout.less',
		'styles/main.less',
		'styles/nav.less',
		'styles/out.less',
		'styles/sidebar.less',
		], 'client');

});
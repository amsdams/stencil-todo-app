const sass = require('@stencil/sass');
exports.config = {
	bundles : [ {
		components : [ 'my-book-list', 'my-book' ]
	} ],
	collections : [ {
		name : '@stencil/router'
	} ],
	plugins : [ sass() ]
};

exports.devServer = {
	root : 'www',
	watchGlob : '**/**'
}



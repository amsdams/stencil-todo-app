const sass = require('@stencil/sass');
exports.config = {
	bundles : [ {
		components : [ 'my-todo-list', 'my-todo' ]
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



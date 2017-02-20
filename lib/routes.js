Accounts.onLogin(function(){
	FlowRouter.go('list');
});


Accounts.onLogout(function(){
	FlowRouter.go('home');
});


FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}

}]);


FlowRouter.route('/', {
	name: 'home',
	action(){
		if (Meteor.userId()){
			FlowRouter.go('list');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});


FlowRouter.route('/list', {
	name: 'list',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Lists'});
	}
});


FlowRouter.route('/list/:id', {
	name: 'list',
	action(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ListSingle'});
	}
});


FlowRouter.route('/menu', {
	name: 'menu',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});
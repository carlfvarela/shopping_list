//Meteor.subscribe('lists');

Template.Menu.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('lists');
	});
});

Template.Menu.helpers({
	lists: ()=> {
		return Lists.find({inList: true});
	}

});
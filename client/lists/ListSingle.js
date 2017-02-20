Template.ListSingle.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleList',id);
	});
});

Template.ListSingle.helpers({
	list: ()=> {
		var id = FlowRouter.getParam('id');
		return Lists.findOne({_id: id});
	}
});
Template.List.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.List.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inList);
		let check_inlist = Session.get('inList');
		if (check_inlist == true){
			Session.set('inList',false);
		}else{
		Session.set('inList',true);
		}
	},
  	'click #remove': function(e) {
  		e.preventDefault();
    	Meteor.call('Lists.remove', this._id);
  	},

  	'click .fa-pencil': function(event,template) {
  		let check_inlist = Session.get('inList');
  		if (check_inlist == true){
  			alert("To edit, first remove the list from the menu.");
  		}else{
  		template.editMode.set(!template.editMode.get());
  		}
  	}
});

Template.List.helpers({
	updateListId: function(){
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});


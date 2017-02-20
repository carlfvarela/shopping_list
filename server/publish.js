Meteor.publish('lists', function(){
	return Lists.find({author: this.userId});
});

Meteor.publish('singleList', function(id){
	check(id, String);
	return Lists.find({_id: id});
});
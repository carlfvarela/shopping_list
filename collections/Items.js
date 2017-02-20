Lists = new Mongo.Collection('lists');


Lists.allow({
	insert: function(userId, doc){
		return !!userId;
	},
	update: function(userId, doc){
		return !!userId;
	}
});

Item = new SimpleSchema({
	name:{
		type: String
	},
	amount:{
		type: String
	}
});


ListSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}
	},

	items: {
		type: [Item]
	},

	inList:{
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform:{
			type:"hidden"
		}
	},

	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function(){
			return new Date()
		},
		autoform:{
			type:"hidden"
		}
	}
});


Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Lists.update(id, {
			$set:{
				inList: !currentState
			}
		});
	},
	'Lists.remove': function(listId){
		Lists.remove(listId,{$remove:{listId}});
	},
});



Lists.attachSchema(ListSchema);
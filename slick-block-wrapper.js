Template.slick.onRendered(function () {
	this.$('.slick-wrapper').slick(this.data);
});

Template.slick.helpers({
	'uuid': function () {
		return Meteor.uuid();
	}
});
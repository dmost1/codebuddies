Meteor.publish("learnings", function(limit) {
    return Learnings.find({},
                          {sort: {created_at: -1}, limit: limit});

});

Meteor.publish("learningsByUserId", function(limit, userId) {
  check(userId, String);
  if(this.userId){
    return Learnings.find({userId: userId},
                          {sort: {created_at: -1}, limit: limit});
  }else{
    this.ready();
  }

});

Meteor.publish("learningsByHangoutId", function(limit, hangoutId) {
  check(hangoutId, String);
  check(limit, Number);

    return Learnings.find({hangout_id: { $exists: true, $not: {$ne: hangoutId } }},
                          {sort: {created_at: -1}, limit: limit});


});


// just a numeric id is not enough for linking a tip with its comments
// so, this prop, could maybe me something like 
// > `*nickname_of_the_user_whose_tip_is_being_commented*_*that_tip's_id*_*nickname_of_the_user_commenting*_*that_tips_id*` (1)
// base on this, each user has (let's say - it's not actually like that, but just for visualization porpuses) an own tips_table

// BUT ACTUALLY, i don't need this. Explanation below: !!!!!!!!!!!!!!!!!!!!!!
// In the db there' 3 tables: client, tip and comment. Each one has a own pk_*_id field.
// that means that i don't need a extremely elaborated id like (1), because using each table's id i can locate
// any tip/comment of any user
// e.g. `*commented_client_id*_*commented_tip_id*_*commentor_client_id*_*comment_tip_id*`;
// So, some changes should be done to the tables structure
// e.g. in the comment table this fields are needed: 
// fk_from_client_id -- the commenting client
// fk_to_client_id -- the commented client
// fk_from_tip_id -- the comment id
// fk_to_tip_id -- the commented tip id
// in fact, this could be all of the comment table's fields
// and then, when commenting, that comment could just go to the tip table as any other tip from a client
// so then, a comment id field won't be necessary cuz it's just another tip that then is linked to the commented tip
// in the comment table

// please, read this several times because i know i might not have made a very good job explaining it to my future me
// but this is important, cuz this is how things are going to work

// TIPS

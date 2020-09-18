exports.run = async (client, message, args) =>{
  const deleteCount = parseInt(args[0], 10);

  // get the delete count, as an actual number.
  if(!message.member.hasPermission("MANAGE_MESSAGES")){
    message.channel.send("You do not have perms to manage messages.");
  }
  
  else{        
    // Ooooh nice, combined conditions. <3

    message.channel.send("You have perms to manage messages.");
    }
}

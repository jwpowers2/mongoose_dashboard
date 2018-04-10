let Rabbit = require("mongoose").model("Rabbit");


class RabbitController{
  
  rabbits(req,res){

    Rabbit.find({},(err,arr)=>{
      //var arr = ["test","testing"];
      if(err){
				
        res.render("rabbits",{});
			
      }else{
	console.log(arr[0]);			
        res.render("rabbits",{rabbits:arr});
			
      }

    })

  }	
  show_rabbit(req,res){

    Rabbit.findOne({_id:req.params.id},(err,rabbit)=>{
      
      if(err){
				
        res.render("rabbit",{});
			
      }else{
	console.log(rabbit);			
        res.render("rabbit",{rabbit:rabbit});
			
      }

    })

  }	

  new_rabbit(req,res){
  
    res.render("new_rabbit");

  }
  edit_rabbit(req,res){
  
    Rabbit.findOne({_id:req.params.id},(err,rabbit)=>{
      
      if(err){
				
        res.render("rabbit",{});
			
      }else{
	console.log(rabbit);			
        res.render("edit_rabbit",{rabbit:rabbit});
			
      }

    })

  }
  mod_rabbit(req,res){
  
    Rabbit.findOne({_id:req.params.id},(err,rabbit)=>{
      rabbit.name = req.body.name;
      rabbit.color = req.body.color;
      rabbit.save((err)=>{
        if(err){
				
          res.redirect("rabbit");
			
        }else{
	  //console.log(rabbit);			
          res.redirect("/rabbit/" + req.params.id);
			
        }
      });
    })

  }

  create_rabbit(req,res){

    let rabbit = new Rabbit(req.body);

    rabbit.save((err)=>{

      if(err){

        res.render("rabbits",{errors:rabbit.errors});

      } else {

        res.redirect("/");

      }
    })

  }
  destroy_rabbit(req,res){

    Rabbit.remove({_id:req.params.id},(err)=>{

      if(err){

        res.redirect("rabbits",{errors:rabbit.errors});

      } else {

        res.redirect("/");

      }
    })

  }

}

module.exports = new RabbitController();

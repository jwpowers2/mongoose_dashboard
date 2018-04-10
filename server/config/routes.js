let RabbitController = require("../controllers/RabbitController.js");

module.exports = (app)=>{

  app.get("/",RabbitController.rabbits);
  app.get("/rabbits/new",RabbitController.new_rabbit);
  app.get("/rabbit/:id",RabbitController.show_rabbit);
  app.get("/rabbit/edit/:id",RabbitController.edit_rabbit);
  app.post("/rabbits",RabbitController.create_rabbit);
  app.post("/rabbits/:id",RabbitController.mod_rabbit);
  app.post("/rabbits/destroy/:id",RabbitController.destroy_rabbit);

}

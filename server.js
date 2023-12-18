var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

const app = Express();
app.use(cors());

const mongoString = "mongodb+srv://memes:w8A2s5BWXap1wwER@cluster0.cxbaboz.mongodb.net/?retryWrites=true&w=majority";

var DATABASENAME = "notes-app";
var dbase;

app.listen(3050, async () => {
  try {
      const client = await MongoClient.connect(mongoString);
      dbase = client.db(DATABASENAME);
      console.log("MongoDB connection successful");
  } catch (error) {
      console.error("Failed to connect to MongoDB", error);
  }
  console.log("Server Started on port 3050\n");
});

app.get('/api/notes-app/GetNotes', (request, response) => {
  dbase.collection("notesappcollection").find({}).toArray((error,result)=>{
    response.send(result);
  })
})

app.post('/api/notes-app/GetNotes',multer().none(),(request, response)=> {
  dbase.collection("notesappcollection").count({},function(error,numofDocs){
    id:(numofDocs+1).toString(),
    description;request.body.newNotes;
  });
  response.json("Add was successful");
})

app.delete('/api/notes-app/DeleteNotes',(request,response)=>{
  dbase.collection("notesappcollection").deleteOne({
    id:request.query.id
  });
  response.json("Delete was successful");
})
/**
 * Creates an Express.js application that connects to a MongoDB database and retrieves notes from the "notescollection".
 * @module notesApp
 */

const Express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoClient } = require("mongodb");

/**
 * Defines the schema for a note in the MongoDB database.
 * @class
 */
/*const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});*/

const app = Express();
//const Note = mongoose.model("Note", NoteSchema);
app.use(cors());

const mongoString =
  "mongodb+srv://dimmed82:dimmed82@notes-app.u33j0lc.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("debug", true);

var DATABASENAME = "notes-app";
var dbase;

app.listen(5038,()=> {
    MongoClient.connect(mongoString,(error,client) => {
        dbase= client.db(DATABASENAME);
        console.log("MongoDB connection successful");
    });
})
//const conn = mongoose.connect(mongoString);
/*mongoose.connect(mongoString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
  if (err) throw err;
  dbase = client.db("notes-app"); // Assign the database instance to `dbase`
  console.log("Connected to MongoDB: " + client.connection.host);

  // Start the server
  app.listen(3020, () => {
    console.log("Server started on port 3020");
  });
});*/
//console.log("Connected to MongoDB: ${conn.connection.host}");

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal server error");
  next();
});

//var DBname = "notes-app";
//var dbase = client.db(Dbname);


/**
 * Retrieves all notes from the "notescollection" in the MongoDB database.
 * @function
 * @name getNotes
 * @param {Object} request - The request object.
 * @param {Object} response - The response object.
 */
app.get('/api/notes-app/GetNotes',(request, response)=> {
  dbase.collection("notescollection").find({}).toArray((error,result)=>{
      response.send(result);
  });
})

// Start the server
app.listen(3020, () => {
  console.log("Server started on port 3020");
});



/*app.get('/api/todoapp/GetNotes',(request, response)=> {
  dbase.collection("todoappcollection").find({}).toArray((error,result)=> {
    response.send(result);
  });
})*/
/*app.post("/notes", async (req, res) => {
  const { title, content } = req.body;

  try {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving notes");
  }
});

app.put("/notes/:id", async (req, res) => {
  const { title, content } = req.body;
  const noteId = req.params.id;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content },
      { new: true },
    );
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating note");
  }
});

app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id; // Get note ID from URL parameter

  try {
    await Note.findByIdAndDelete(noteId);
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting note");
  }
});

// Start the server
app.listen(3020, () => {
  console.log("Server started on port 3020");
});

/*const Express = require("express");
//const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");

const app = Express();
app.use(cors());

//const mongoString = "mongodb+srv://dimmed82:dimmed82@notes-app.u33j0lc.mongodb.net/?retryWrites=true&w=majority";
const mongoString = "mongodb+srv://dimmed82:dimmed82@cluster0.nqxtmgp.mongodb.net/?retryWrites=true&w=majority";

var DBname = "notes-app";
var dbase;


/*app.listen(3250,() => {
    MongoClient.connect(mongoString,(error, client) => {
        dbase=client.db(DBname);
        console.log("server started on port 3250");
       // console.log(dbase);
    })
})
*/
/*app.listen(3300,() => {
  console.log("server started on port 3300");
    MongoClient.connect(mongoString,(error, client) => {
        dbase=client.db(DBname);
        console.log("server connected to the database");
       // console.log(dbase);
    })
})

app.get('/api/notes-app/GetNotes',(request, response)=> {
    dbase.collection("notescollection").find({}).toArray((error,result)=>{
        response.send(result);
    });
})

app.post('/api/notes-app/AddNotes',multer().none(), (request,response)=>{
    dbase.collection("notescollection").count({},function(error,numofDocs){
        dbase.collection("notescollection").insertOne({
            id:(numofDocs+1).toString(),
            description:request.body.newNotes
        });
        response.json("added");
    })
})

app.delete('/api/notes-app/DeleteNotes', (request,response) => {
    dbase.collection("notescollection").deleteOne({
        id:request.query.id
    });
    response.json("deleted")
})*/
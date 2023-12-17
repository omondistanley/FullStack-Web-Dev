const Express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const app = Express();
const Note = mongoose.model("Note", NoteSchema);
app.use(cors());

const mongoString =
  "mongodb+srv://dimmed82:dimmed82@notes-app.u33j0lc.mongodb.net/?retryWrites=true&w=majority";

//"mongodb+srv://dimcked94:Dimmed82.@final-project.jqdjec8.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("debug", true);
//mongoose.set("strictQuery", true);
const conn = mongoose.connect(mongoString);

console.log("Connected to MongoDB: ${conn.connection.host}");
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal server error");
  next();
});

app.post("/notes", async (req, res) => {
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

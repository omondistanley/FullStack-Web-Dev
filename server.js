import Express from "express";
import mongoose from "mongoose";

const note   = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

const mongoString = 'mongodb+srv://omondistanley82:<Stanley2002.>@cluster0.utiqesn.mongodb.net/?retryWrites=true&w=majority'
const app = Express();

mongoose.connect(mongoString);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal server error');
    next();
});

app.post('/notes', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const newNote = new Note({ title, content });
      await newNote.save();
      res.json(newNote);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

app.get('/notes', async(req, res) => {
    try {
        const notes = await Note.find({});
        res.json(notes);
    }catch(error) {
        console.error(error);
        res.status(500).send('Error retrieving notes');
    }
});

app.put('/notes/:id', async (req, res) => {
    const { title, content } = req.body; 
    const noteId = req.params.id; 
  
    try {
      const updatedNote = await Note.findByIdAndUpdate(noteId, { title, content }, { new: true }); 
      res.json(updatedNote); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating note');
    }
  });

  app.delete('/notes/:id', async (req, res) => {
    const noteId = req.params.id; // Get note ID from URL parameter
  
    try {
      await Note.findByIdAndDelete(noteId); 
      res.json({ message: 'Note deleted successfully' }); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting note');
    }
  });
  
  // Start the server
  app.listen(3001, () => {
    console.log('Server started on port 3001');
  });
  




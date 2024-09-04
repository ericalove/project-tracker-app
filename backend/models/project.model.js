import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  url:{
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  hotlist:{
    type:Boolean,
    required: true
  },
  progress:{
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

export default Project;

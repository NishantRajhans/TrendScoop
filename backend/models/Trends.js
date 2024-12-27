const mongoose= require('mongoose');
const trendSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
    unique: true, 
  },
  trend1: {
    type: String,
    required: true,
  },
  trend2: {
    type: String,
    required: true,
  },
  trend3: {
    type: String,
    required: true,
  },
  trend4: {
    type: String,
    required: true,
  },
  trend5: {
    type: String,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  ipAddress: {
    type: String,
    required: true, 
  },
});
module.exports=mongoose.model('Trends', trendSchema);


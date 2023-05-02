const mongoose = require('mongoose')

const tripSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'travelUsers',
    },
    name: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    trip: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    tripDate: {
      type: Date,
      required: [true, 'Please add a text value'],
    },
    arrival: {
      type: String,
      
    },
    departure: {
      type: String,
     
    },

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Trip', tripSchema)

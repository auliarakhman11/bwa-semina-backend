const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let talentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama harus diisi'],
    },
    role: {
      type: String,
      default: '-',
    },
    organizer : {
      type: mongoose.Types.ObjectId,
      ref: 'Organizer',
      required: true
    },
		// untuk membuat relasi pada mongodb kita perlu membuat types ObjectId
    image: {
      type: mongoose.Types.ObjectId,
      ref: 'Image',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Talent', talentSchema);
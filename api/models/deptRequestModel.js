import mongoose from 'mongoose';

const deptRequestSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, 'Please enter your first name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'Please enter your last name'],
      maxlength: [100, 'Name can not be more than 100 characters'],
    },
    requestTo: {
      type: String,
      required: [true, 'Please provide the request type'],
      enum: ['engineering', ''],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    cost: {
      type: Number,
      required: [true, 'Please enter the project amount'],
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const DeptRequest = mongoose.model('DeptRequest', deptRequestSchema)
export default DeptRequest;

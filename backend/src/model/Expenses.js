const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2')

// Schema 

const expensesSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    type: {
        type: String,
        default: "Expense"
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User ID is required"]
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }
})

// pagination

expensesSchema.plugin(mongoosePaginate)

const Expense = mongoose.model('expense', expensesSchema);

module.exports = Expense;
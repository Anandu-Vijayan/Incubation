const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },

        logedIn: {
            type: Boolean,
           
            default: true
        },

        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }

    },
    {
        timestamps: true,
    }
)
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();

    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
userSchema.methods.matchPassword = async function (enterdPassword) {
    return await bcrypt.compare(enterdPassword, this.password)
}

const User = mongoose.model("User", userSchema);

module.exports = User;

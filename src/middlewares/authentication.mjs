const Entry = require('../models/Entry'); // Import your Entry model

// Middleware to check if the user is the owner of the entry
const isEntryOwner = async (req, res, next) => {
    try {
        const entry = await Entry.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        if (entry.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Middleware to check if the user is updating their own user information
const isUserOwner = (req, res, next) => {
    if (req.params.id !== req.user.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }
    next();
};

module.exports = { isEntryOwner, isUserOwner };
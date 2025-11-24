import User from "../model/userModel.js"

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const { email } = newUser;

        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({ errorMessage: "User already exists" })
        }
        const savedData = await newUser.save();
        // res.status(200).json(savedData);
        res.status(200).json({message: "User created succesfully"});

    } catch (err) {
        res.status(500).json({ errorMessage: err.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
};

export const getUserByID = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json(userExists)
    } catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "user not found" })
        }
        const updateData = await User.findByIdAndUpdate(id, req.body, {
            new: true
        });
        // res.status(200).json(updateData)
        res.status(200).json({message: "User updated succesfully"});
    } catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "user not found" })
        }
        const deleteData = await User.findByIdAndDelete(id)
        res.status(200).json({ message: "User delete succesfully" })
    } catch (err) {
        res.status(500).json({ errorMessage: err.message });
    }
}
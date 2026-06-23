const getAllUsers = (req, res) => {
    res.json({
        message: "ambil semua users"
    });
}

const insertUser = (req, res) => {
    res.json({
        message: "insert user"
    });
}

const deleteUser = (req, res) => {
    res.json({
        message: "delete user"
    });
}

const updateUser = (req, res) => {
    res.json({
        message: "update user"
    });
}

module.exports = {
    getAllUsers,
    insertUser,
    deleteUser,
    updateUser
};
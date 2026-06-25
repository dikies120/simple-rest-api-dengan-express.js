import userModel from "../model/users.js";

const getAllUsers = async(req, res) => {
    const {id} = req.params;
    const data = await userModel.getUsers(id);
    try {
        if(data.rows.length === 0){
            return res.status(404).json({
                message: "user tidak ditemukan",
            });
        }

        res.json({
            message: "berhasil mengambil user",
            data: data.rows,
    });
    } catch (error) {
        res.status(500).json({
            message: "error server",
            serverMessage: error,
        })
    }
}

const insertUser = async(req, res) => {
    const {body} = req;
    try {
        await userModel.createNewUser(body);
        res.json({
            message: "berhasil menambahkan user",
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: "error server",
            serverMessage: error,
        })
    }
}

const deleteUser = async(req, res) => {
    const {id} = req.params;

    try {
        const result = await userModel.deleteUser(id);

        res.json({
            message: "berhasil menghapus user",
            data: id,
        });
    } catch (error) {
        res.status(500).json({
            message: "error server",
            serverMessage: error,
        });
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try{
        const result = await userModel.updateUser(body, id);

        res.json({
            message: "berhasil mengupdate user",
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: "error server",
            serverMessage: error,
        });
    }
}

export default {
    getAllUsers,
    insertUser,
    deleteUser,
    updateUser
};
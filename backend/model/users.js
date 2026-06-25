import dbPool from "../config/database.js";

const getUsers = async (id) => {
    const SQLQuery = "SELECT * FROM users WHERE id = $1";
    const values = [id];
    return await dbPool.query(SQLQuery, values);
}

const createNewUser = async (body) => {
    const SQLQuery = `INSERT INTO users (nama, umur, jenis_kelamin) 
                      VALUES ($1, $2, $3)`;
    const values = [body.nama, body.umur, body.jenis_kelamin];
    return await dbPool.query(SQLQuery, values);
}

const updateUser = async(body, id) => {
    const SQLQuery = `UPDATE users SET nama = $1, umur = $2, jenis_kelamin = $3 WHERE id = $4`;
    const values = [body.nama, body.umur, body.jenis_kelamin, id];
    return await dbPool.query(SQLQuery, values);
}

const deleteUser = async (id) => {
    const SQLQuery = "DELETE FROM users WHERE id = $1";
    const values = [id];
    return await dbPool.query(SQLQuery, values);
}

export default {getUsers, createNewUser, updateUser, deleteUser};
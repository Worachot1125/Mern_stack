import express from "express"

import { createUser, getAllUsers, getUserByID, updateUser, deleteUser } from "../controller/userController.js"

const router = express.Router();
router.post("/create", createUser)
router.get("/get", getAllUsers)
router.get("/:id", getUserByID)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router;

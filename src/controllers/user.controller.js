import { asyncHander } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import{ User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

// when this method is called, response message is sent as "ok", & status code: 200
const registerUser = asyncHander ( async (requestAnimationFrame, res) => {
    res.status(200).json({
        message: "ok"
    })
})

  //**** likh lena
export {
    registerUser,
}
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

//const router = Router()

//router.route("/register").post(registerUser)








import {upload} from "../middlewares/multer.middleware.js"
import { verifyJwt } from "../middlewares/multer.middleware.js";
// add middleware before calling the method

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avtar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)

export default router
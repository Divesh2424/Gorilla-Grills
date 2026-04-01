import { Router } from "express";
import { getHomePage } from "../controller/cafe-controller.js";

const router = Router();

router.route("/").get(getHomePage);
// router.route("/menu").get(getMenuPage);

export const cafeRoutes = router;
import { Router } from "express";
import { getHomePage, getAboutPage } from "../controller/cafe-controller.js";

const router = Router();

router.route("/").get(getHomePage);
router.route("/about").get(getAboutPage);

export const cafeRoutes = router;
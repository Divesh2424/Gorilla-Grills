import { Router } from "express";
import { getHomePage, getAboutPage, getMenuPage, getOrderPage } from "../controller/cafe-controller.js";

const router = Router();

router.route("/").get(getHomePage);
router.route("/about").get(getAboutPage);
router.route("/menu").get(getMenuPage);
router.route("/order").get(getOrderPage);

export const cafeRoutes = router;
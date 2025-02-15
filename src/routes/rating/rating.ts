import { Router } from "express";
import { GenericController } from "../../controllers/genericController.js";
import { isAuthenticated } from "../../middlewares/isAuthenticated.js";
import Rating from "../../models/Rating.js";
import updateRating from "../../controllers/rating/rating.js";
import { validateFields } from "../../middlewares/validation.js";
import { ratingValidationFields } from "../../utils/validators/validator.js";

const router = Router();


const ratingController = new GenericController(Rating);


router.get('/', ratingController.getByQuery);
router.post('/create', isAuthenticated('user&artist') , validateFields(ratingValidationFields) ,  updateRating);

export default router;
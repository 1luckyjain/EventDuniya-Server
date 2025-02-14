import { Router } from "express";
import { isAuthenticated } from "../../middlewares/isAuthenticated.js";
import { validateFields } from "../../middlewares/validation.js";
import { bookFreeEventFields, contactFormFields } from "../../utils/validators/validator.js";
import { GenericController } from "../../controllers/genericController.js";
import ContactForm from "../../models/Contact.js";
import EventRegistrations from "../../models/EventRegistration.js";

const router = Router();
const contactController = new GenericController(ContactForm);
const bookFreeEventsController = new GenericController(EventRegistrations);

router.post("/:id", validateFields(bookFreeEventFields) ,bookFreeEventsController.create);
router.post("/contact" , isAuthenticated('user') , validateFields(contactFormFields) ,  contactController.create);
export default router;

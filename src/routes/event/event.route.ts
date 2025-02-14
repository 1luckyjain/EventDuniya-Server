import express from 'express';
import Event from '../../models/Event.js';
import { GenericController } from '../../controllers/genericController.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { validateFields } from '../../middlewares/validation.js';
import { mandatoryFieldsForEvent } from '../../utils/validators/validator.js';

const router = express.Router();
const controller = new GenericController(Event);

router.post('/', isAuthenticated('user&artist')  , validateFields(mandatoryFieldsForEvent),  controller.create); 
router.put('/:id', isAuthenticated('user&artist'), validateFields(mandatoryFieldsForEvent) , controller.update); 
router.get('/:id', controller.get); 
router.get('/', controller.getAll); 
router.put('/', isAuthenticated('user&artist') , validateFields(mandatoryFieldsForEvent), controller.updateAll); 


export default router;

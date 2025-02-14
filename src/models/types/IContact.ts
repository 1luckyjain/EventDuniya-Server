export interface IContactForm extends Document {
    name?: string;       // Optional
    email: string;       // Required
    phone: string;      // Optional
    subject: string;     // Required
    message: string;     // Required
    eventId : string ; 
    createdAt?: Date;    
    updatedAt?: Date;    
  }
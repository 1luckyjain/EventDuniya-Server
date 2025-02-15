export const validateFields = (data: any, requiredFields: string[]): string | null => {
    for (const field of requiredFields) {
      if (!data[field]) {
        return field;
      }
    }
    return null;
  };
  
  export const artistRequiredFields = [ 
    'username',
    'email',
    'password',
    'city',
    'state',
    'country',
    'pincode',
    'phoneNumber',
    'tag',
    'bio',
    'videoLink1',
    'instagram',
    'twitter',
    'youtube',
    'facebook',
    'tiktok',
     'role'
  ];
  
  export const userRequiredFields = [
    'username',
    'email',
    'password',
    'role'
  ];
  

export const mandatoryFieldsForEvent = [
  'image',
  'title',
  'date',
  'location',
  'city',
  'time',
  'description',
  'type',
  'capacity',
  'genere'
];


export const contactFormFields = [
  "name",
  "email",
  "phone",
  "subject",
  "message",
  "createdAt",
  "updatedAt",
];

export const bookFreeEventFields = [
  "userId" , 
  "eventId"
]
export const reviewValidationFields = ["artistId", "userId", "reviewDescription", "rating"];

export const ratingValidationFields = ["ratingCount", "rating"];

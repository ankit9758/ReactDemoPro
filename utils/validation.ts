 // Check if email is valid
 export const isValidEmail = (email:string) => {
   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
   return emailRegex.test(email);
 };
 

  export const validateEmpty = (field: string) => {
    console.log("field.length === 0",field.length === 0)
    return field.length === 0;
  };
  
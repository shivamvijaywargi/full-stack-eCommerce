import { z } from 'zod';

// Cannot figure out how to use this with formidable, I will check this later if possible
// export const CreateProductSchema = z.object({
//   body: z.object({
//     title: z
//       .string({
//         required_error: 'Title is required',
//         invalid_type_error: 'Title must be a string',
//       })
//       .min(5)
//       .max(55),
//     description: z
//       .string({
//         required_error: 'Description is required',
//         invalid_type_error: 'Description must be a string',
//       })
//       .min(10),
//     shortDescription: z
//       .string()
//       .min(20, {
//         message: 'Short description must be atleast 20 characters long',
//       })
//       .optional(),
//     price: z
//       .number({
//         required_error: 'Price is required',
//         invalid_type_error: 'Price must be a positive number',
//       })
//       .min(1, {
//         message: 'Price must be atleast 1',
//       })
//       .positive(),
//     quantity: z
//       .number({
//         invalid_type_error: 'Quantity must be a positive number',
//       })
//       .positive()
//       .max(99999, {
//         message: 'Quantity must be less than or equal to 99999',
//       })
//       .optional(),
//     label: z.enum(['Hot', 'New', 'Best Selling']).optional(),
//     inStock: z.boolean().optional(),
//     category: z.string({
//       required_error: 'Category is required',
//       invalid_type_error: 'Category must be a string',
//     }),
//   }),
// });

export const UpdateProductSchema = z.object({
  body: z.object({
    title: z.string().min(5).max(55).optional(),
    description: z.string().min(10).optional(),
    shortDescription: z
      .string()
      .min(20, {
        message: 'Short description must be atleast 20 characters long',
      })
      .optional(),
    price: z
      .number({
        required_error: 'Price is required',
        invalid_type_error: 'Price must be a positive number',
      })
      .positive()
      .min(1, {
        message: 'Price must be atleast 1',
      })
      .optional(),
    quantity: z
      .number({
        invalid_type_error: 'Quantity must be a positive number',
      })
      .positive()
      .max(99999, {
        message: 'Quantity must be less than or equal to 99999',
      })
      .optional(),
    label: z.enum(['Hot', 'New', 'Best Selling']).optional(),
    inStock: z.boolean().optional(),
    category: z
      .instanceof(Object)
      .transform((id) => id.toString())
      .optional(),
  }),
});

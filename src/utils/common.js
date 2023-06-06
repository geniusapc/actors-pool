/**
 *
 * @param {*} obj
 * @returns formdata
 *
 * @example
 *  Example usage:
 *  const obj = {
 *  name: 'John Doe',
 *  age: 30,
 *  email: 'johndoe@example.com',
 *  images: [File1, File2, File3],
 * };
 * const formData = objectToFormData(obj);
 *
 *
 */

export function objectToFormData(obj) {
  const formData = new FormData();

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) {
        // Handle array of images
        for (let i = 0; i < obj[key].length; i++) {
          formData.append(`${key}[]`, obj[key][i]);
        }
      } else {
        formData.append(key, obj[key]);
      }
    }
  }

  return formData;
}

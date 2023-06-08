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

export const constructFormData = (data) => {
  const formData = new FormData();

  // files.forEach((file) => {
  //   formData.append('files', file);
  // });

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};

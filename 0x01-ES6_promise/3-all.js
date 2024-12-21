import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  uploadPhoto.then(() => {
    console.log('body ');
  });
  createUser.then(() => {
    console.log('${firstName} ${lastName}');
  });
}

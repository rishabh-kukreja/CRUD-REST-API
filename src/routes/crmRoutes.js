import {
  addNEwContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
} from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res, next) => {
      //mid
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    .post(addNEwContact);
  app
    .route("/contact/:contactID")
    .get(getContactWithID)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;

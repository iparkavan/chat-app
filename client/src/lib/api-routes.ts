// export const HOST = process.env.NEXT_PUBLIC_NODE_BACKEND_URL;

const CONTACTSAPI = `/api/contacts`;
const SEARCHCONTACTSROUTES = `${CONTACTSAPI}/search`;
const GET_DM_CONTACTS_ROUTES = `${CONTACTSAPI}/get-contact-for-dm`;

const MESSAGESAPI = `/api/messages`;
const GETALLMESSAGESROUTES = `${MESSAGESAPI}/get-messages`;
const UPLOAD_FILE_ROUTE = `${MESSAGESAPI}/upload-file`;

export {
  SEARCHCONTACTSROUTES,
  GETALLMESSAGESROUTES,
  GET_DM_CONTACTS_ROUTES,
  UPLOAD_FILE_ROUTE,
};

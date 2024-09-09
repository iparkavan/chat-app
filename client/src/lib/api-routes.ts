// export const HOST = process.env.NEXT_PUBLIC_NODE_BACKEND_URL;

const CONTACTSAPI = `/api/contacts`;
const SEARCHCONTACTSROUTES = `${CONTACTSAPI}/search`;

const MESSAGESAPI = `/api/messages`;
const GETALLMESSAGESROUTES = `${MESSAGESAPI}/get-messages`;

export { SEARCHCONTACTSROUTES, GETALLMESSAGESROUTES };

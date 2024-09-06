export type senderReciver = {
  _id: string;
  email: string;
  bgColor: number;
  firstName: string;
  lastName: string;
};

export type MessagesTypes = {
  _id: string;
  sender: senderReciver;
  recipient: senderReciver;
  messageType: string;
  content: string;
  timestamp: string;
};

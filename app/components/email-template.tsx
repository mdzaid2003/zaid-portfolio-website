import * as React from "react";

interface EmailTemplateProps {
  message: string;
  subject: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  subject,
  email
}) => (
  <>
    <h4>Email: <span>{email}</span></h4>
    <h4>Subject: <span>{subject}</span></h4>
    <p>New message submitted:</p>
    <p>{message}</p>
  </>
);

export default EmailTemplate;
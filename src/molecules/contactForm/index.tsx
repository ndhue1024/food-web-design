import Button from "@atoms/button";
import Input from "@atoms/input";

import './style.css'

const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <Input 
          type="text" 
          label="Name" 
          placeholder="Enter you name"
        />
        <Input 
          type="email" 
          label="Email" 
          placeholder="Enter email address"
        />
        <Input 
          type="text" 
          label="Subject" 
          placeholder="Write a subject"
        />
        <div className="input-group">
          <label>Message</label>
          <textarea
            className="input"
            placeholder="Write your message"
            rows={5}
          ></textarea>
        </div>
        <div className="input-group">
          <Button title="Send" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
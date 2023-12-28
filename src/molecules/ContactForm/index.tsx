import { FormEvent, useState } from "react";
import Button from "@atoms/Button";
import Input from "@atoms/Input";
import SubmitSnackbar from "@atoms/Snackbar";
import "./style.css";

type Form = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate name
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      newErrors.name = "Invalid name";
      valid = false;
    } else {
      newErrors.name = "";
    }

    // Validate email
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Validate subject
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    } else {
      newErrors.subject = "";
    }

    // Validate message
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleInputOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleTextAreaOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await fetch(`https://658d11dd7c48dce947386ea0.mockapi.io/contact`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(form),
        });
        setOpen(true);
        setStatus("success");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        console.log("Message sent!, ", form);
      } catch (error) {
        setOpen(true);
        setStatus("failed");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        console.log(error);
      }
    } else {
      setStatus("failed");
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            label="Name"
            placeholder="Enter you name"
            value={form.name}
            name="name"
            onChange={handleInputOnchange}
          />
          {errors.name && <div className="input-error">{errors.name}*</div>}
        </div>
        <div>
          <Input
            type="text"
            label="Email"
            placeholder="Enter email address"
            value={form.email}
            name="email"
            onChange={handleInputOnchange}
          />
          {errors.email && <div className="input-error">{errors.email}*</div>}
        </div>
        <div>
          <Input
            type="text"
            label="Subject"
            placeholder="Write a subject"
            value={form.subject}
            name="subject"
            onChange={handleInputOnchange}
          />
          {errors.subject && (
            <div className="input-error">{errors.subject}*</div>
          )}
        </div>
        <div>
          <div className="input-group">
            <label>Message</label>
            <textarea
              className="input"
              placeholder="Write your message"
              rows={5}
              value={form.message}
              name="message"
              onChange={handleTextAreaOnchange}
            ></textarea>
            {errors.message && (
              <div className="input-error">{errors.message}*</div>
            )}
          </div>
        </div>
        <div className="input-group">
          <Button type="submit" title="Send" variant="primary" />
        </div>
      </form>
      {status === "success" ? (
        <SubmitSnackbar
          open={open}
          onClose={handleClose}
          message="Message sent successfully!"
          severity="success"
        />
      ) : (
        <SubmitSnackbar
          open={open}
          onClose={handleClose}
          message="Message sent failed!"
          severity="error"
        />
      )}
    </div>
  );
};

export default ContactForm;
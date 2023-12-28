import { FormEvent, useState } from "react";
import SubmitSnackbar from "@atoms/snackbar";
import Button from "@atoms/button";
import Input from "@atoms/input";
import { ExpandMoreOutlined, CalendarTodayOutlined } from "@mui/icons-material";
import "./style.css";

type Form = {
  time: string;
  date: string;
  name: string;
  phone: string;
  quantity: number;
};

const BookingForm = () => {
  let day: Date = new Date();
  let dateNow =
    day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<Form>({
    time: "6.30",
    date: dateNow,
    name: "",
    phone: "",
    quantity: 1,
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
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

    // Validate phone number
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
      valid = false;
    } else if (!/^\d-\d{3}-\d{3}-\d{4}$/.test(form.phone)) {
      newErrors.phone = "Phone's pattern must be (x-xxx-xxx-x)";
      valid = false;
    } else {
      newErrors.phone = "";
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await fetch(`https://658d11dd7c48dce947386ea0.mockapi.io/booking`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(form),
        });
        setOpen(true);
        setStatus("success");
        setForm({
          time: "6.30",
          date: dateNow,
          name: "",
          phone: "",
          quantity: 1,
        });
        console.log("Booking success!, ", form);
      } catch (error) {
        setOpen(true);
        setStatus("failed");
        setForm({
          time: "6.30",
          date: dateNow,
          name: "",
          phone: "",
          quantity: 1,
        });
        console.log(error);
      }
    } else {
      setStatus("failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="date"
        label="Date"
        Icon={CalendarTodayOutlined}
        name="date"
        value={form.date}
        onChange={handleInputOnchange}
        min={dateNow}
      />

      <div className="input-group">
        <label>Time</label>
        <select
          name="time"
          id="time"
          className="input"
          value={form.time}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            event.preventDefault();
            const { name, value } = event.target;
            setForm((prevForm) => ({
              ...prevForm,
              [name]: value,
            }));
          }}
        >
          <option value="06:30 PM">06:30 PM</option>
          <option value="07:00 PM">07:00 PM</option>
          <option value="07:30 PM">07:30 PM</option>
          <option value="08:00 PM">08:00 PM</option>
        </select>
        <ExpandMoreOutlined className="select-icon" />
      </div>
      <div>
        <Input
          type="text"
          label="Name"
          placeholder="Enter you name"
          name="name"
          value={form.name}
          onChange={handleInputOnchange}
        />
        {errors.name && <div className="input-error">{errors.name}*</div>}
      </div>
      <div>
        <Input
          type="text"
          label="Phone"
          placeholder="x-xxx-xxx-xxxx"
          name="phone"
          value={form.phone}
          onChange={handleInputOnchange}
        />
        {errors.phone && <div className="input-error">{errors.phone}*</div>}
      </div>
      <div className="input-group">
        <label>Total Person</label>
        <select
          name="quantity"
          id="person"
          className="input"
          value={form.quantity}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            event.preventDefault();
            const { name, value } = event.target;
            setForm((prevForm) => ({
              ...prevForm,
              [name]: value,
            }));
          }}
        >
          <option value={1}>1 Person</option>
          <option value={2}>2 Person</option>
          <option value={3}>3 Person</option>
          <option value={4}>4 Person</option>
          <option value={5}>5 Person</option>
          <option value={6}>6 Person</option>
        </select>
        <ExpandMoreOutlined className="select-icon person" />
      </div>
      <div className="input-group">
        <Button type="submit" title="Book A Table" variant="primary" />
      </div>
      {status === "success" ? (
        <SubmitSnackbar
          open={open}
          onClose={handleClose}
          message="Booking successfully!"
          severity="success"
        />
      ) : (
        <SubmitSnackbar
          open={open}
          onClose={handleClose}
          message="Booking failed!"
          severity="error"
        />
      )}
    </form>
  );
};
export default BookingForm;
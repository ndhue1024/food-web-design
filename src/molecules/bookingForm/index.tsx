import { FormEvent, useState } from "react";
import SubmitSnackbar from "@atoms/Snackbar";
import Button from "@atoms/Button";
import Input from "@atoms/Input";
import SelectInput from "@atoms/SelectInput";
import { CalendarTodayOutlined } from "@mui/icons-material";
import "./style.css";

type Form = {
  time: string;
  date: string;
  name: string;
  phone: string;
  quantity: number;
};

const BookingForm = () => {
  let dateNow =
  new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
  const [isLoading, setIsLoading] = useState(false);
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
      newErrors.phone = "Phone's pattern must be (x-xxx-xxxx)";
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

  const handleSelectOnchange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
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
        setIsLoading(false);
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
        setIsLoading(false);
        console.log(error);
      }
    } else {
      setIsLoading(false);
      setStatus("failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        disabled={isLoading}
        type="date"
        label="Date"
        Icon={CalendarTodayOutlined}
        name="date"
        value={form.date}
        onChange={handleInputOnchange}
        min={dateNow}
      />
      <SelectInput
        name="time"
        disabled={isLoading}
        value={form.time}
        onChange={handleSelectOnchange}
        options={[
          { value: "06:30 PM", text: "06:30 PM" },
          { value: "07:00 PM", text: "07:00 PM" },
          { value: "07:30 PM", text: "07:30 PM" },
          { value: "08:00 PM", text: "08:00 PM" },
        ]}
      />
      <div>
        <Input
          disabled={isLoading}
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
          disabled={isLoading}
          type="text"
          label="Phone"
          placeholder="x-xxx-xxx-xxxx"
          name="phone"
          value={form.phone}
          onChange={handleInputOnchange}
        />
        {errors.phone && <div className="input-error">{errors.phone}*</div>}
      </div>
      <div>
        <SelectInput
          disabled={isLoading}
          name="quantity"
          value={form.quantity}
          onChange={handleSelectOnchange}
          options={[
            { value: 1, text: "1 Person" },
            { value: 2, text: "2 Person" },
            { value: 3, text: "3 Person" },
            { value: 4, text: "4 Person" },
          ]}
        />
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
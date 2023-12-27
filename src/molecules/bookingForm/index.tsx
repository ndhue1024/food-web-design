import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Button from "@atoms/button";
import Input from "@atoms/input";

import './style.css'

const BookingForm = () => {
  return (
    <form>
      <Input 
        type="date" 
        label="Date" 
        value="2021-04-01"
        Icon={CalendarTodayOutlinedIcon}
      />
      
      <div className="input-group">
        <label>Time</label>
        <select name="time" id="time" className="input" defaultValue={6.30}>
          <option value={6.30}>06:30 PM</option>
          <option value={2}>07:00 PM</option>
          <option value={3}>07:30 PM</option>
          <option value={4}>08:00 PM</option>
        </select>
        <ExpandMoreOutlinedIcon className="select-icon" />
      </div>
      <Input 
        type="text" 
        label="Name" 
        placeholder="Enter you name"
      />
      <Input 
        type="text" 
        label="Phone" 
        placeholder="x-xxx-xxx-xxx"
      />
      <div className="input-group">
        <label>Total Person</label>
        <select name="person" id="person" className="input" defaultValue={1}>
          <option value={1}>1 Person</option>
          <option value={2}>2 Person</option>
          <option value={3}>3 Person</option>
          <option value={4}>4 Person</option>
          <option value={5}>5 Person</option>
          <option value={6}>6 Person</option>
        </select>
        <ExpandMoreOutlinedIcon className="select-icon person" />
      </div>
      <div className="input-group">
        <Button title="Book A Table" variant="primary" />
      </div>
    </form>
  );
};
export default BookingForm;
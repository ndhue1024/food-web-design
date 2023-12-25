import React from 'react'
import { GeneralTemplate } from '../../templates/GeneralTemplate'
import { Title } from '../../atoms/title'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import './style.css'
import Button from '../../atoms/button'

export const Book = () => {
  return (
    <GeneralTemplate>
      <section className="book">
        <div className="hero">
          <div className="title">
            <Title title="Book A Table" />
            <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
          </div>
          <div className="form">
            <form>
              <div className="input-group">
                <label>Date</label>
                <input className='input' type='date' value="2021-04-01" />
              </div>
              <div className="input-group">
                <label>Time</label>
                <select name="time" id="time" className="input" defaultValue={1}>
                  <option value={1}>06:30 PM</option>
                  <option value={2}>07:00 PM</option>
                  <option value={3}>07:30 PM</option>
                  <option value={4}>08:00 PM</option>
                </select>
                <ExpandMoreOutlinedIcon className='select-icon' />
              </div>
              <div className="input-group">
                <label>Name</label>
                <input className='input' type='text' placeholder='Enter you name' />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input className='input' type='text' placeholder='x-xxx-xxx-xxx' />
              </div>
              <div className="input-group">
                <label>Total Person</label>
                <select name="person" id="person" className="input" defaultValue={1}>
                  <option value={1}>1 Person</option>
                  <option value={2}>2 Person</option>
                  <option value={3}>3 Person</option>
                  <option value={4}>4 Person</option>
                </select>
                <ExpandMoreOutlinedIcon className='select-icon person' />
              </div>
              <div className="input-group">
                <Button title='Book A Table' isRed={true} />
              </div>
            </form>
          </div>
        </div>
        <div className="map">
          <img src="./assets/Map.png" alt="map" />
        </div>
      </section>
    </GeneralTemplate>
  )
}

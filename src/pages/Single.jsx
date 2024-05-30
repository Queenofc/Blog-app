import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu';

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 Days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae fugiat facilis veritatis nisi, quisquam distinctio iure! Aut totam et eum dicta voluptas cum, pariatur quia reprehenderit rerum nisi ducimus deleniti!</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tempore incidunt, perspiciatis eaque excepturi earum? Iure, tempore id. Vel, provident nam. Consectetur delectus dolorem aspernatur eveniet quidem. Nulla, sit distinctio!</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single 
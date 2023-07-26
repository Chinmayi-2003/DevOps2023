import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
export default function AdminDash() {
  const navigate = useNavigate()
  return (
    <div>
       {
                    localStorage.getItem('token') ?
                        <button onClick={() => {
                            localStorage.clear()
                            navigate('/admin/dashboard')
                        }}> LOGOUT </button> :
                        <button onClick={() => {
                            navigate('/admin/login')
                        }}
                        > LOGIN </button>
                }
       <div>
            ADMIN DASHBOARD
        </div>
    </div>
  )
}

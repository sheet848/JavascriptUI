import React from 'react'

const UserList = ({ item }) => {

  return (
    <>
    <div>
        <div className="card">
            <h5 className="card-header">User : {item.login.username}</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h4 className="card-title">{item.name.title} {item.name.first} {item.name.last}</h4>
                        <p className="card-text">Email: {item.email}</p>
                    </div>
                    <div className="col-3">
                        <img src={item.picture.medium} alt="" className='img-fluid'/>
                    </div>
                </div>
                <div className="row d-flex flex-nowrap">
                    <div className="col">
                        <h5 className="card-text mb-0">
                            User for {item.registered.age}{" "}
                            {item.registered.age === 1 ? "year" : " years"}
                        </h5>
                        <p className="card-text mb-0">Age: {item.dob.age}</p>
                        <p className="card-text mb-0">Nationality: {item.nat}</p>
                        <p className="card-text mb-0">Phone: {item.phone}</p>
                    </div>
                    <div className="col">
                        <h6 className="card-text mb-0">Address:</h6>
                        <p className="card-text mb-0">
                            <small>
                            {item.location.street.number} {item.location.street.name},
                            </small>
                        </p>
                        <p className="card-text mb-0 text-wrap">
                            <small>
                            {item.location.state}, {item.location.country} -{" "}
                                <small>{item.location.postcode}</small>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserList
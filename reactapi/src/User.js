import Table from 'react-bootstrap/Table';


function User()
{

    const userlist=
    [
        {
          "id": 7,
          "email": "michael.lawson@reqres.in",
          "first_name": "Michael",
          "last_name": "Lawson",
          "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
          "id": 8,
          "email": "lindsay.ferguson@reqres.in",
          "first_name": "Lindsay",
          "last_name": "Ferguson",
          "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
          "id": 9,
          "email": "tobias.funke@reqres.in",
          "first_name": "Tobias",
          "last_name": "Funke",
          "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
          },
          {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
          },
          {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
          }
        ]
          
      return(
          <div>
              <h1>User List</h1>
              <table  striped bordered hover variant="dark">
                  <thead>
                  <tr>
                      <th>Sr. No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>User Photo</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                   userlist.map((item,index)=>(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.first_name}  {item.last_name}</td>
                    <td>{item.email}</td>
                    <td><img className="imghyt" src={item.avatar} /></td>
                </tr>
                   )) 
                }
                
                </tbody>
            </table>
        </div>
    )
}

export default User
  
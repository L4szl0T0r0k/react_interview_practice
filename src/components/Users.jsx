import React from 'react'

const Users = ({usersData, search, setSearch}) => {

  console.log(search)
  return (
    <div className="content">
        <form>
          <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
        </form>
        
        <div className='users-container'>
            {usersData.filter((item) => {
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search.toLowerCase())
            }).map((item, index) => (
              <div key={index} className='user-box' onClick={() => console.log(item.bio)}>
                  <p>{item.name}</p>
              </div>
          ))}
        </div>
        
            
         
    </div>
  )
}

export default Users
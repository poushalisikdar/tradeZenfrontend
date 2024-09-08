import React from 'react'


function Team() {
    return ( 
        <div className="container ">
      <div style={{ marginTop: "3rem" }} className="row text-center ">
        <h1 className="fs-2 text-center mb-5   ">
          People
        </h1>
      </div>

      <div className="row  pricinghero ">
        <div className="col-6 mt-5">
          <img className='img-fluid' style={{marginLeft:"17em",width:"50%",height:"78%",borderRadius:"50%",marginBottom:"0rem"}} src='media/poushali.jpg' />
          <h5 style={{marginLeft:"17rem"}} className=' ml-5 mt-3 text-center'>Poushali Sikdar.<br></br> BCA 3rd year</h5>
        </div>
        <div className="team col-6 ">
          <p className="mt-2 p-5 pricing text-muted">
           Hi Everyone! As a passionate BCA student, I am continuously exploring the exciting world of web development. Through building this website, I’ve discovered and mastered numerous new features, gaining invaluable hands-on experience along the way. Each step of this project has elevated my knowledge and brought me closer to my goals, pushing me one level up in my journey. I’m thoroughly enjoying the process and <p> I am eager to keep learning and improving with every new challenge.</p>
      
          </p>
        </div>
      </div>
    </div>
     );
}

export default Team;
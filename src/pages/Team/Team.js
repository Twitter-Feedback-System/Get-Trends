import React, { Component } from 'react'
import './Team.css'
// import ali from '../../assets/Profile/Ali.jpg'

// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Profileurl from '../../assets/Profile/profile-bg.jpg'
 class Team extends Component {
   
    constructor(props) {
        super(props) 
        this.state = { 
           profile : [
              { id: 1, Name: 'Ali', Role: 'Backend Developer', Imgurl: ('../../assets/Profile/Ali.jpg'), Giturl: "https://github.com/Aliabbas78692", About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje " },
              { id: 2, Name: 'Nikunj', Role: 'Frontend Developer', Imgurl: '../../assets/Profile/Nikunj.jpg', Giturl: "https://github.com/Nikunj018", About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje " },
              { id: 3, Name: 'Vaspar', Role: 'Full stack Developer', Imgurl: '../../assets/Profile/Vaspar.jpg', Giturl: "https://github.com/Vaspar-a", About: " Haeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje " },
              { id: 4, Name: 'Rishabh', Role: 'Frontend Developer', Imgurl: '../../assets/Profile/Rishabh.jpg', Giturl: "https://github.com/Rain1213", About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje" },
              { id: 5, Name: 'Vidit', Role: 'Backend Developer', Imgurl: '../../assets/Profile/Vidit.jpg', Giturl: "https://github.com/Vidit631", About: "aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje" }
           ]
        }
     }


    render() {
   
        return (
            <>
                <section>
                    <div className = "container">
                        <h1 className="heading">Meet The Team</h1>
                        <div className = "card-wrapper">
                        {this.state.profile.map((item,index)=>{
                        return(
                            <div key = {index}className = "card">
                                <img src = {Profileurl} className = "card-img"></img>
                                <img src = {item.Imgurl} className = "profile-img"></img>
                                <h1>{item.Name}</h1>
                                <p className= "role">{item.Role}</p>
                                <p className= "about">
                                  {item.About}
                                </p>
                                <a href={item.Giturl} className="btn">contact</a>
                            </div>
                              )
                          })}

                        </div>

                    </div>
                </section>
            </>
        )
    }
}
export default Team;
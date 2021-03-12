import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import './Team.css'
import imgAli from '../../assets/Profile/Ali.jpg'
import imgNikunj from '../../assets/Profile/Nikunj.jpg'
import imgVaspar from '../../assets/Profile/Vaspar.jpg'
import imgRishabh from '../../assets/Profile/Rishabh.jpg'
import imgVidit from '../../assets/Profile/Vidit.jpg'
import Profileurl from '../../assets/Profile/profile-bg.jpg'
import Card from '../../components/Card/Card';

const menus = [{text: 'Home', link: 'home'}, {text: 'Search', link: 'search'}, {text: 'Team', link: 'team'}];

 class Team extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           profile : [
              { id: 1, Name: 'Ali', Role: 'Backend Developer', Imgurl: imgAli, Giturl: "https://github.com/Aliabbas78692", LinkedInurl:"https://www.linkedin.com/in/aliabbas-attarwala-71b010176/", About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje " },
              { id: 2, Name: 'Nikunj', Role: 'Frontend Developer', Imgurl: imgNikunj, Giturl: "https://github.com/Nikunj018", LinkedInurl:"https://www.linkedin.com/in/nikunj-delavadiya-4544b518b/", About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje " },
              { id: 3, Name: 'Vaspar', Role: 'Full stack Developer', Imgurl: imgVaspar, Giturl: "https://github.com/Vaspar-a", LinkedInurl:"https://www.linkedin.com/in/vaspar-a-9a189a121/", About: " Haeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje " },
              { id: 4, Name: 'Rishabh', Role: 'Frontend Developer', Imgurl: imgRishabh, Giturl: "https://github.com/Rain1213", LinkedInurl:"https://www.linkedin.com/in/rishabh-balse-ab5018207/", About: " aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje" },
              { id: 5, Name: 'Vidit', Role: 'Backend Developer', Imgurl: imgVidit, Giturl: "https://github.com/Vidit631", LinkedInurl:"#", About: "aeeyhezr erhj ez ezj eruez u ksgbskjb ukhbjk esgksngsje" }
           ]
        }
     }

    render() {
        return (
            <>
                <Header menus={menus} />
                <section>
                    <div className = "container">
                        <h1 className="heading">Meet The Team</h1>
                        <div className = "card-wrapper">
                        {this.state.profile.map((item,index)=>{
                            return <Card key={`card-${index}`} item={item} bgImg={Profileurl} />
                        })}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Team;
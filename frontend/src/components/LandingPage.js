import React from 'react';

import RegisterModal from  "./RegisterModal";
import  '../css/LandingPage.css';

class LandingPage extends React.Component{
    state={ show: false };

    openModal = () =>{
        this.setState({show: true});
        console.log(this.state)
    };

    closeModal = (e) =>{
        e.preventDefault();
        this.setState({show: false});
        console.log(this.state)

    };

    //Verifying user login?
    render(){
        return(
            <div className='Landing-Page'>
                <div className='landing-page-nav-bar'>
                    <div className='logo-container'>
                        <div className='icon-border'>
                            <img className='icon' src='https://image.flaticon.com/icons/svg/1530/1530649.svg' alt = 'logo icon'/>
                        </div>    
                        <h1 className='landing-header'>kookr
                        </h1>
                    </div>    
                    <div className='landing-page-nav-buttons'>
                        <h3 className='login-button' >Login</h3>
                        <h3 className='registration-button' onClick={this.openModal}>Register</h3>
                    </div>
                </div>
                <div className='landing-page-sub-container'>
                    <div className='blurb-outline'>
                        <div className='landing-page-blurb-container'>
                            <div className='blurb'>
                                <div className='blurb-p'>
                                    Bringing fun and focus back to meal planning.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing-page-modal">
                    <RegisterModal show={this.state.show} closeHandle={this.closeModal} />
                </div>   
            </div>
        )
    }
}
export default LandingPage;
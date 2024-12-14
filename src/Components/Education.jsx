import React from "react";
import "./Education.css";

const Education = () => {
    return(
        <div className="education-container">
            
            <div className="education-outer-box">
                
                <div className="degree">
                    <img src="https://mywbut.com/logo_pic/b5f80cc05d1f56702e8bea3f126e2ffc.jpg" alt="bcet-image" className="inst-img" />
                    <div className="inst-details">
                        <h4 className="inst-name">Bengal College of Engineering & Technology</h4>
                        <p className="degree-name">B.Tech - CSE</p>
                        <p className="duration">2022-2026</p>
                    </div>
                </div>
                <hr />
                <div className="degree">
                    <img src="https://southpointpublicschool.com/wp-content/uploads/2019/01/bannerspps-1.jpg" alt="spps-image" className="inst-img" />
                    <div className="inst-details">
                        <h4 className="inst-name">South Point Public School</h4>
                        <p className="degree-name">Intermediate - Physics, Chemistry, Maths</p>
                        <p className="duration">2020-2022</p>
                    </div>
                </div>
                <hr />
                <div className="degree">
                    <img src="https://www.edudwar.com/wp-content/uploads/2021/12/Shivam-International-School-Baikthpur.jpg" alt="sis-image" className="inst-img" />
                    <div className="inst-details">
                        <h4 className="inst-name">Shivam International School</h4>
                        <p className="degree-name">Std. I to X</p>
                        <p className="duration">- 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;
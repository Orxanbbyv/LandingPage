import React from "react";
import Right from "./right.svg";
import Logo1 from "./logo1.svg";
import "./membership.scss";
const MemberShip = () => {

  return (
    <div className="members">
      <div className="info">
        <div>
          <p>
            Unlock life with your <br />
            <span>Landing Membership</span>
            <h6>
              Learn More <img src={Right} alt="right" />
            </h6>
          </p>
        </div>
        <p className="annual">$199 Annual Membership</p>
      </div>
      
      <section>

        {/* burda map edecem */}
               <div className="card">
          <div>
            <img src={Logo1} alt="logo1" />
          </div>
          <p>
            <span>Lease how you want</span> <br /> 
            <p>
              Stay between one and 12+ months with the ability to transfer to
              other homes in the Landing network.
            </p>
          </p>
        </div>
                
        

        
      </section>
    </div>
  );
};

export default MemberShip;

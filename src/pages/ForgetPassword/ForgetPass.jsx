import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FrogetPass.css'
import PhonenumberFrom from "../../Component/Forms/phoneNumber";
import ShowAndHidePassword from "../../Component/Button/Show_password";


const forgetPassword=()=>{
    return(
      <section className="vh-100" style={{background: "#ffffff"}}>
        <div className="containerpy-5h-100"  >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div  style={{margin:"4rem"}} className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Forget Password</h3>
                  <div className="form-outline mb-4">
                    {PhonenumberFrom()}
                    <label className="form-label" for="tel">Phone number</label>
                  </div>

                  

                  <button className="btn btn-primary btn-lg btn-block loginbtn" type="submit">Verife</button>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );


};
export default forgetPassword
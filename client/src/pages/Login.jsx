import '../App.css'

export const Login = () => {
  const google = (() =>{
    console.log('login')
    window.open('http://localhost:5000/api/travel/auth/google',"_self");
  })
  return (
    <section className="vh-100" style={{backgroundColor: ''}}>
        <div className="login-container py-5 h-100">
          <div className="row ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card login-card" style={{borderRadius: '1rem'}}>
                <div className="card-body p-5 text-center d-flex flex-column  align-items-center">
                  <h3 className="mb-3">Sign in</h3>
                  <img src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg" className='logo-brand' alt="" />
                  
                  <button className="btn btn-lg btn-block btn-primary google-btn" style={{backgroundColor: '#dd4b39'}}
                    type="submit" onClick={google}><i className="fab fa-google me-2" ></i> Sign in with google</button> 

                     {/* <a href="/auth/google" class="btn btn-danger  google-btn">
                      <i class="fa fa-google" aria-hidden="true"></i>
                      login with google
                    </a> */}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
  )
}

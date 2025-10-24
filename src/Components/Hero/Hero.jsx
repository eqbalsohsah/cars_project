import herocar from "../../assets/img/herocar.png"
import ios from "../../assets/img/ios.png"
import andriod from "../../assets/img/andriod.png"





export default function Hero() {
    return (
    <div>
      <div className="container">
        <div className="row py-5">
            <div className="col-md-6 hero_div ">
              <h2 className="fw-bold fs-2 lh-base">Find, book and <br/> rent a car  <span className='text-primary'> Easily</span></h2>
              <p>Get a car wherever and whenever you<br/> need it with your IOS and Android device.</p>
              <div className="d-flex mt-2" >
                <img src={ios} className="me-2"/>
                   <img src={andriod}/>

              </div>
            </div>
            <div className="col-md-6 bg-img">
<img src={herocar} className="img-fluid herocar"/>
            </div>
        </div>
      </div>
    </div>
  )
}

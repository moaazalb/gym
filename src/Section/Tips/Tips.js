import './Tips.css'
import line from '../../assets/images/line-dec.png'
import Carousel from '../../Components/Carousel/Carousel'
const Tips = () => {
    return (
        <section class="section" id="tips">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Our <em>Tips</em></h2>
                        <img src={line} alt=""/>
                        <p>Here we will provide the most important tips that should be followed in the gym</p>
                    </div>
                </div>
            </div>
           </div>
           <Carousel/>
    </section>

    )
}
export default Tips
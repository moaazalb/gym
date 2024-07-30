import './Carousel.css'
import A from  '../../assets/images/1.jpg'
import B from '../../assets/images/2.jpg'
import C from '../../assets/images/3.jpg' 
const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={A} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>First Tip</h5>
              <p>It is very important before starting the exercise to warm up well, especially the target muscle and the shoulder joint, in order to avoid injuries..</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={B} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Second Tip</h5>
              <p>In this sport, correct exercise is not enough to build muscles. Rather, attention must be paid to the number of hours of sleep and good rest for the recovery process. Even the psychological factor has an important role..</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={C} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h5>Third Tip</h5>
              <p>In order to get the maximum benefit from each exercise, you must enter the highest possible weight from the first round, taking into account correct performance and full range of motion. This is because the progression of weight will not give the maximum benefit until the last round..</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default Carousel
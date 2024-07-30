import './Features.css'
import line from '../../assets/images/line-dec.png'
import first from '../../assets/images/features-first-icon.png'

const Features = () => {
    return (

        <section class="section" id="program">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="section-heading">
                        <h2>Choose <em>Program</em></h2>
                        <img src={line} alt="waves" />
                        <p>With The Right Exercise And Tips You Will Be Capable To Build a Perfect Body And improve Your Strength</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <ul class="features-items">
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src={first} alt="First One" />
                            </div>
                            <div class="right-content">
                                <h4>Beginner level  </h4>
                                <p>At this stage, it is important to focus on the player in several aspects: performance, permissible weight, and range of motion , Diet to know what will need in next level </p>
                                <a href="#" class="text-button">Program A</a>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src={first} alt="second one" />
                            </div>
                            <div class="right-content">
                                <h4>Mid level</h4>
                                <p>At this stage, the player is able to know the appropriate weight for each exercise, in addition to the correct performance and Be careful to avoid injury</p>
                                <a href="#" class="text-button">Program B</a>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src={first} alt="third gym training"/>
                            </div>
                            <div class="right-content">
                                <h4>Advanced level</h4>
                                <p>Here the player gains muscle mass and deep knowledge of several training systems and his body’s nutritional needs and Able to participate in tournaments</p>
                                <a href="#" class="text-button">Program c </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <ul class="features-items">
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src={first} alt="fourth muscle"/>
                            </div>
                            <div class="right-content">
                                <h4>Cardio</h4>
                                <p>In bodybuilding, it is important when building muscle mass to get rid of fat by performing exercises that lead to an increase in the heart rate, such as fast walking and cycling for a certain time </p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src={first} alt="training fifth"/>
                            </div>
                            <div class="right-content">
                                <h4>Muscle recovery</h4>
                                <p> a very important factor in this sport , and it is important to know the time it takes each muscle to recover from the training session, and this depends on its size, as there are small muscles and large muscles.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                        <li class="feature-item">
                            <div class="left-icon">
                                <img src={first} alt="gym training"/>
                            </div>
                            <div class="right-content">
                                <h4>Injuries</h4>
                                <p> bodybuilders are exposed to many injuries, such as muscle tear, complete muscle tear, or joint dislocation, and this is due to the weight being too high for the player or incorrect performance of the exercise.</p>
                                <a href="#" class="text-button">Discover More</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Features
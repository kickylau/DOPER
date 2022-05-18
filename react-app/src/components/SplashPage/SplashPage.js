import { useSelector } from 'react-redux';
import "./SplashPage.css"
import background from "./background.jpg";




function SplashPage() {

    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
            <div className="container">
                <div className="second-container">
                    <img src={background} alt="Background" className="background" />
                    <div className="centered">
                        <h1 id="words">Loving pet care in your neighborhood.</h1>
                        <h1 id="words">Book trusted sitters and dog walkers.</h1>
                    </div>
                </div>

                <div className="third-container">
                    <div className="row">
                        <h3>Services for every dog.</h3>
                    </div>
                    <div>
                        <div className="service-container">
                            <div className="box orange">
                                <h2 className="title">Dog Walking</h2>
                                <p>Your dog gets a walk in your neighborhood. Perfect for busy days and dogs with extra energy to burn.</p>
                            </div>
                            <div className="box blue">
                                <h2 className="title">Drop-In Visits</h2>
                                <p>Your sitter drops by your home to play with your pets, offer food, and give potty breaks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="card">
                            <div className="inner">
                                <p className="title2">I was nervous to leave Sam with strangers, but my worries quickly faded. Going forward Doper will be my first choice for pet sitting.</p>
                                <div className="subtitle">– Molly S.</div>
                            </div>
                        </div>

                        <div className="card card2">
                            <div className="inner">
                                <p className="title2">My sitter took great care of my dog, above and beyond my expectations. I would book with Doper again in a heartbeat!</p>
                                <div className="subtitle">– Danielle H.</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="book-row">
                                <div className="panel-title">
                                    <h3> Book with a local pet sitter you can <strong>trust</strong> now</h3>
                                </div>

                                <div className="foooter2">
                                    <div className="footerLink">All sitters pass a background check</div>
                                    <div className="footerLink" > And provide detailed personal information</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SplashPage


import beachillustration from "./images/beachillustration.jpg"

function Home() {
    return (
        <div className='my-3'>
            <img id="landingimg" src={beachillustration} alt="vacationpic" width="65%"></img>
            <div class="bottom-right text-responsive">Where Your Vacation Dream Comes True</div>
        </div>
    )
}

export default Home
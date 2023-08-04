import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class SafariPackages extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="package-container">
          <div className="maasai-package-container-day1">
            <img
              src="https://i.ibb.co/2NN5bQH/img14.jpg"
              alt="maasai-mara"
              className="maasai-image"
            />
            <h1 className="title">
              Travel Unbounded to the WILD - MAASAI MARA
            </h1>
            <p>DAY 1</p>
            <button type="button" className="view-details-button">
              <Link to="/package" className="nav-link">
                View Details
              </Link>
            </button>
          </div>
          <div className="maasai-package-container-day2">
            <img
              src="https://i.ibb.co/bgGzmq6/img22.jpg"
              alt="maasai-mara"
              className="maasai-image"
            />
            <h1 className="title">
              Travel Unbounded to the WILD - MAASAI MARA
            </h1>
            <p>DAY 2</p>
            <button type="button" className="view-details-button">
              <Link to="/package" className="nav-link">
                View Details
              </Link>
            </button>
          </div>
          <div className="maasai-package-container-day1">
            <img
              src="https://i.ibb.co/4VSpbkS/img25.jpg"
              alt="maasai-mara"
              className="maasai-image"
            />
            <h1 className="title">
              Travel Unbounded to the WILD - MAASAI MARA
            </h1>
            <p>DAY 3</p>
            <button type="button" className="view-details-button">
              <Link to="/package" className="nav-link">
                View Details
              </Link>
            </button>
          </div>
        </div>

        <div className="form-details-container">
          <form className="form">
            <h1 className="add-appointment-heading">
              We&apos;re here for you!
            </h1>
            <label htmlFor="title" className="label">
              NAME
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="Title"
            />
            <label htmlFor="date" className="label">
              DATE
            </label>
            <input type="date" id="date" className="input" />
            <label htmlFor="title" className="label">
              EMAIL
            </label>
            <input type="text" className="input" />
            <label htmlFor="title" className="label">
              No of People Travelling
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="Title"
            />
            <button type="submit" className="add-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default SafariPackages

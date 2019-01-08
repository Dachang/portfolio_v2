import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import IndexBanner from './components/IndexBanner';
import Workcard from './components/Workcard';
import './App.css';
import './skeleton.css';

class Homepage extends PureComponent {
  render() {
    return (
      <div className="App">
        <IndexBanner/>
        <div className="latest-work first-row row">
          <div className="one column"></div>
          <div className="ten columns">
            <Link to="/motb">
              <Workcard
                imageSources="/static/media/image/motb_workcard"
                title="Museum of the Bible Interactive System, 2017"
                description="The museum, located in Washington, D.C, showcases fascinating artifacts and offers an immersive experience with the Bible and its ongoing impact on the world around us, with cutting-edge digital technology."
              />
            </Link>
          </div>
          <div className="one column"></div>
        </div>
        <div className="latest-work second-row row">
          <div className="one column"></div>
          <div className="ten columns">
            <div className="row">
              <div className="six columns left">
                <Workcard
                  imageSources="/static/media/image/lbi_workcard"
                  title="The 1938Projekt, 2017"
                />
              </div>
              <div className="six columns right">
                <Workcard
                  imageSources="/static/media/image/cdi_workcard"
                  title="CDI Mobile, 2016"
                />
              </div>
            </div>
          </div>
          <div className="one column"></div>
        </div>
      </div>
    );
  }
}

export default Homepage;

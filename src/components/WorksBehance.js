import React, { Component } from 'react';
import FadeInSection from './FadeInSection';
import Button from './Button';
import Portfolio from './Portfolio/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Works extends Component {
  render() {

    const URL_DEFAULT = '/ui';

    const Param = ({ match }) => <Portfolio user={match.params.username} showFeatured />;
    const ParamDefault = ({ match }) => {
      let listUsers = ['peerashaik'];
      let username = listUsers[Math.floor(Math.random() * listUsers.length)];

      return <Portfolio user={username} showFeatured />;
    };

    return (
      <>

      <FadeInSection>
      <div className="container">
        <div className="text-center my-20">
          <h2 className="relative text-4xl md:text-5xl text-center my-10"><span className="inline text-pink">Client</span> - Success</h2>
          <p className="px-10">Having had a great successful journey so far and I extremely have gratitude for all my employers and their clients. Here are some of the websites/products I was involved with and I am sure it was a great success for them and for me.</p>
          <p className="px-10 mt-5">Keeping clients informed throughout the project regular updates and transparent communication help build trust and prevent misunderstandings. Be open to feedback and willing to make iterates. Flexibility shows that you value their input and are committed to delivering the best possible outcome.</p>
        </div>
      </div>
      </FadeInSection>

    <div className="container">
      <div className="my-10 py-5">
        <div className="my-work-list flex flex-wrap justify-evenly gap-12">
          <Router>
            <Switch>
              <Route path={`${URL_DEFAULT}/:username`} component={Param} />
              <Route path={`${URL_DEFAULT}`} component={ParamDefault} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>

      <FadeInSection>
      <div className="container">
        <div className="text-center my-32 px-10">
          <h2 className="text-4xl md:text-5xl text-center my-10">Employer - Customer - <span className="inline-block text-pink">Bonding</span></h2>
          <p className="mb-10">Building a strong bond between customers and employers is essential for long-term success and loyalty. Customer satisfaction is a crucial aspect of any business, especially in design and development.</p>
          <Button btnlink='experience' btnstyle='btn-primary' label='ALL MY EMPLOYERS' />
        </div>
      </div>
      </FadeInSection>

      </>
    );
  }
}

export default Works;
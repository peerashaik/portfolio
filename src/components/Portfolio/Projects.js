import React, { Component } from 'react';
import moment from 'moment';
import jsonp from 'jsonp';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    }
  }

  componentDidMount() {

    jsonp(this.props.url, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {

        let projects = [], id, higherNumber = 0;

        data.projects.forEach(project => {

          //verify if this project has the higher view number
          if (project.stats.views > higherNumber) {
            higherNumber = project.stats.views;
            id = project.id;
          }

          let imageBlocked = new RegExp(/(blocked)/g);

          if (!imageBlocked.test(project.covers[202])) {
            let data = {
              name: project.name,
              published_on: () => moment(project.published_on * 1000).calendar(),
              image: project.covers[404] || project.covers[202],
              stats: {
                appreciations: project.stats.appreciations,
                views: project.stats.views,
              },
              created_on: project.created_on,
              url: project.url,
              featured: () => project.id === id ? true : false,
              fields: project.fields
            }

            projects.push(data);
          }
        });

        this.setState({ projects });
      }
    });

  }

  render() {

    let projects = this.state.projects.map((project, i) => {

      let showFeatured = () => this.props.showFeatured ? (project.featured() ? 'Card__featured' : '') : '';

      let fields = project.fields.map((field, i) => {
        return (
          <span className="inline bg-gray-800 text-gray-400" key={i}>{field}</span>
        );
      });

      return (

    <div className={`Card item w-full md:w-5/12 ${showFeatured()}`} key={i}>
      <div className="img-wrapper">
        <i className="logo"></i>
        <a href={project.url} target="_blank" rel="noreferrer">
          <img src={project.image} alt={project.name} title={project.name} />
        </a>
      </div>
      <div className="Card__details">
        <div>
          <i className="material-icons md-12">thumb_up</i> {project.stats.appreciations}
        </div>
        <div>
          <i className="material-icons md-12">visibility</i> {project.stats.views}
        </div>
      </div>
      <h2 className="text-white mt-10 mb-2 relative">{project.name}</h2>
      <p className="text-white mb-5 text-sm">published on {project.published_on()}</p>
      <p>{fields}</p>
    </div>

      );
    });

    return (
      <div className="Projects Grid">
        {projects}
      </div>
    );
  }
}

export default User;

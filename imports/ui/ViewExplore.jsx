import React, {Component} from "react";
import PercentCircle from './PercentCircle.jsx';
export default class Record extends Component {
  constructor(props){
    super(props);
    this.state={

    };
  }

  render()
  {
    return (
        <section className="strips">
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Lorem">Explore</h1>
              <div className="strip__inner-text">
                <h2>Ettrics</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
                <p>
                  <a href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"/></a>
                </p>
              </div>

            </div>
          </article>
          <article className="strips__strip">
            <div className="strip__content">
              <h1 className="strip__title" data-name="Ipsum">Profile</h1>
              <div className="strip__inner-text">
                <h2>Ettrics</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente deserunt consectetur, quod reiciendis corrupti quo ea aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis quibusdam facilis, illo voluptates odit!</p>
                <p>
                  <a href="https://twitter.com/ettrics" target="_blank"><i className="fa fa-twitter"/></a>
                </p>
              </div>
            </div>
          </article>
          <i className="fa fa-close strip__close"/>
        </section>
    );
  }
}
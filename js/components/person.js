var React = require('react');

var Person = function(props) {

    return (
        <div className="person">
            <div className="person-name">{props.name}</div>
            <img className="person-img" src={props.imageUrl} />
            <div className="person-job">{props.job}</div>
        </div>
    );
};

module.exports = Person;

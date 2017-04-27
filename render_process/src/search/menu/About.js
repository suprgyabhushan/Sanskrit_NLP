'use strict';

import React from 'react';

const About = React.createClass({
    render: function() {
        return <div className="about">
            <p>
                Hosted with &#10084; on <a href="https://github.com/arkokoley/sandhi-splitter" target="_blank">GitHub</a>.
                <br/>
                Post there any issues or email Gaurav at <a href="mailto:gaurav.koley@iiitb.org">gaurav.koley@iiitb.org</a>
            </p>
        </div>
    }
});

export default About;

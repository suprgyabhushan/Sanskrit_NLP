'use strict';

import React from 'react';
import Result from './DictResult';
import Prompt from './Prompt';
import {Tabs, Tab} from 'material-ui/Tabs';
import {cyan600} from 'material-ui/styles/colors';

import MWKey from './mw/HeadKey';
import MWBody from './mw/RowBody';

const ResultList = React.createClass({
    render: function () {
        return <div>
            {this.getSwitcher()}
        </div>;
    },

    getContent: function(request, result) {
        switch (result.dict.code) {
            case 'mw':
                return <Result
                    request={request}
                    result={result.data}
                    key={result.dict.code}
                    api={this.props.api}
                    keyComponent={MWKey}
                    bodyComponent={MWBody}
                />;
        }
    },

    getSwitcher: function() {
        if (!this.props.request.query) {
            return <Prompt/>
        }

        const results = this.props.results;
        const tabs = results.map(result =>
            <Tab label={result.dict.label}>
                {this.getContent(this.props.request, result)}
            </Tab>
        );

        const styles = {
            'background-color': cyan600
        };
        return <Tabs tabItemContainerStyle={styles}>{tabs}</Tabs>;
    }
});
export default ResultList;

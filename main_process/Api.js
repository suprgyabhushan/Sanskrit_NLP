'use strict';

import MW from './dicts/mw/MonierWilliams';
import MWApi from './dicts/mw/Api';
import pyshell from 'python-shell';
import Sanscript from 'sanscript.js';

const mwDict = new MW();
const mwApi = new MWApi(mwDict);

class Api {
    static findWord(request) {
        return [
            {dict: {code: 'mw', label: 'Monier Williams'}, data: mwDict.search(request), split: Api.findSplit(request) }
        ];
    }
    static findSplit(request){
        var dataString = '';
        var req = Sanscript.t(request.query, request.fromEncoding, 'slp1')
        var options = {
          mode: 'text',
          scriptPath: 'common/sandhisplitpy/',
          args: [req.toString(), 'ALL', 'common/sandhisplitpy/']
        };

        pyshell.run('split.py', options, function (err, results) {
          if (err) throw err;
          // results is an array consisting of messages collected during execution
          console.log('results: %j', JSON.parse(results[0]));
        });
        return dataString;
    }

    static listen(ipc) {
        ipc.on(Api.SEARCH, function (event, request) {
            event.returnValue = Api.findWord(request);
        });

        mwApi.getMethods().map((method) => {
            ipc.on(method.code, function(event, request) {
                event.returnValue = method.callback(request);
            })
        });
    }
}

Api.SEARCH = 'search';

export default Api;

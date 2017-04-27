'use strict';

import MW from './dicts/mw/MonierWilliams';
import MWApi from './dicts/mw/Api';

const mwDict = new MW();
const mwApi = new MWApi(mwDict);

class Api {
    static findWord(request) {
        return [
            {dict: {code: 'mw', label: 'Monier Williams'}, data: mwDict.search(request)},
        ];
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

/*
This script was created by OA
Twitter: OA42236246
*/

/* EXAMPLE DETECT CHANGES 

	getServerStatus("mc.hypixel.net", "players.online", "motd.clean.0", "motd.clean.1")
*/

const __SERVER_STATUS_API_URL = "https://api.mcsrvstat.us/2/";
const __UPDATE_TIME = 6; // SECONDS

var __INTERVAL_ = null;
var __OLDER_STATUS_DATA = null;
var __NEW_STATUS_DATA = {};

var ServerStatusOnPlayerChangeEvent = function (data = {}) {
    console.log("There have been changes in the server data.", data);
};

function getServerStatus(andress, ...__DETECT_CHANGES) {
    if (andress == undefined) return { messsage: "Unknown andress" };

    return new Promise(async (resolve, reject) => {
        try {
            var RequestURL = await fetch(__SERVER_STATUS_API_URL + andress);
            var Response = await RequestURL.json();

            if (!Response.online) return reject(Response);

            if (__INTERVAL_ == null) {
                __INTERVAL_ = setInterval(async () => {
                    getServerStatus(andress)
                        .then((data) => {
                            let changed = false;
                            for (var find of __DETECT_CHANGES) {
                                var findKeys = find.split(".");

                                var currentValue = data;
                                var olderValue = __NEW_STATUS_DATA;

                                for (var key of findKeys) {
                                    currentValue = currentValue[key];
                                    olderValue = olderValue[key];
                                }

                                if (currentValue != olderValue && currentValue == null && olderValue == null) {
                                    changed = true;
                                    break;
                                }
                            }

                            if (changed) {
                                __OLDER_STATUS_DATA = __NEW_STATUS_DATA;
                                __NEW_STATUS_DATA = data;

                                ServerStatusOnPlayerChangeEvent(data);
                            }
                        })
                        .catch(reject);
                }, __UPDATE_TIME * 1000);
            }

            resolve(Response);

            __NEW_STATUS_DATA = Response;
            if (__OLDER_STATUS_DATA == null) __OLDER_STATUS_DATA = Response;
        } catch (e) {
            reject(e);
        }
    });
}

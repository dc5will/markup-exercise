import config from "../config";

const HotelApiService = {
  getHotelList() {
    return fetch(`${config.API_ENDPOINT}/hotels`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getVenetianInfo() {
    return fetch(`${config.API_ENDPOINT}/hotels/venetian`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default HotelApiService;

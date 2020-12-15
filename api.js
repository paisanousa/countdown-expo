import moment from "moment";
import Constants from "expo-constants";

const { manifest } = Constants;
const api = manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
  : `api.example.com`;

// -----------------------------------------------------|
// Note about this Setup:
// When starting json-server, you must specify the host
// computer as a param. No host param defaults to
// 'localhost' which is NOT helpful.
//
// For example...
// json-server db.json
// will NOT get it done.
//
// Assuming host computer IP is 10.0.0.14,
// json-server --host 10.0.0.14 db.json
// will deliver the goods.
// -----------------------------------------------------|

const url = `http://${api}/events`;
console.log(url);

export function getEvents() {
  return fetch(url)
    .then((response) => response.json())
    .then((events) => events.map((e) => ({ ...e, date: new Date(e.date) })));
}

export function formatDate(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format("D MMM YYYY");
}

export function formatDateTime(dateString) {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format("h:mm A on D MMM YYYY");
  // return parsed.format("H A on D MMM YYYY");
}

export function getCountdownParts(eventDate) {
  const duration = moment.duration(
    moment(new Date(eventDate)).diff(new Date())
  );
  return {
    days: parseInt(duration.as("days")),
    hours: duration.get("hours"),
    minutes: duration.get("minutes"),
    seconds: duration.get("seconds"),
  };
}

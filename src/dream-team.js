const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  console.log(members);
  if (!Array.isArray(members)) {
    return false;
  }
  let team = [];
  members.forEach((e) => {
    if (typeof e === "string") {
      let el = e.trim();
      team.push(el[0].toUpperCase());
    }
  });
  if (team === []) {
    return false;
  }
  return team.sort().join("");
};

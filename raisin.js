const raisinAlarm = function(cookies) {
  let choco = "🍫";
  let raisin = "🍇";

  for (let cookie of cookies) {
    if (cookie === raisin) {
      console.log("Raisin alert!");
    } else if (cookie === choco) {
      console.log("All good!");
    }
  }
};

raisinAlarm(["🍫", "🍫", "🍇", "🍫"]);



const raisinAlarm = function(cookies) {
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i] === "🍇") {
      console.log("Raisin Alert")
    }
  }
}





const raisinAlarm = function (cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i].includes("🍇")) {
      return "Raisin alert!";
    }
  }
  return "All good";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function (cookies) {
  let result = [];
  for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].includes("🍇")) {
      result.push("raisin Alarm");
    } else {
      result.push("All Good");
    }
  }
  return result;
};
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

"Paired with Ahmed Alhajahmed."
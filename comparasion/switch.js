const os = "mac";
let creator;
switch (os) {
case "linux":
    creator = "Linus Torvalds";
    break;
case "windows":
    creator = "Bill Gates";
    break;
case "mac":
    creator = "Steve";
    break;
default:
    creator = "Unknown";
    break;
}

console.log(creator);
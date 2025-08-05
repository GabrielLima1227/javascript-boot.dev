const name = "James Holden";
const provider = "AT&T";
const phoneNumber = "555-123-4567";
const subscriptionType = null;



console.log(
    `Creating ${subscriptionType ?? "Guest"} Profile for ${name} with ${provider} at ${phoneNumber}.`,
);
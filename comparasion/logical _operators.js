const hasHighOpenRate = true;
const isRecent = true;
const hasStrongReplyRate = false;
const canBeResent = true;
const isFlaggedAsSpam = false; 

const isHighEngagement = hasHighOpenRate && isRecent && (hasStrongReplyRate || canBeResent) && !isFlaggedAsSpam;

console.log(`The campaign is high-engagement: ${isHighEngagement}`);

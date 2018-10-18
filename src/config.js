const dev = {
  STRIPE_KEY: "pk_test_MS72D2dte4ePzlBqLhTxR0Td",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-59qn2xzysys1"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.charliegustavsson.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_YaBdjKJTh",
    APP_CLIENT_ID: "3d53sfp7peiorbvlc6lug6nho4",
    IDENTITY_POOL_ID: "us-east-1:2e93477c-1c31-4b98-8cfc-e80f32a0ed9b"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_MS72D2dte4ePzlBqLhTxR0Td",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1two516221yxq"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.charliegustavsson.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Dch260spX",
    APP_CLIENT_ID: "6e75mddvjr0s8bftkjimhrfhp6",
    IDENTITY_POOL_ID: "us-east-1:b4491658-74f2-4077-b7d6-1717c12df646"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

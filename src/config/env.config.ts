export const EnvConfiguration = () => ({
  defaultLimit: process.env.DEFAULT_LIMIT || 7,
  mongdb: process.env.MONGODB,
  port: process.env.PORT,
});

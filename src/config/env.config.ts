interface IEnv {
    next_public_server_api_url: string;
}

const envs = ["NEXT_PUBLIC_SERVER_API_URL"];

const loadEnv = (): IEnv => {
  envs.forEach((env) => {
    if (!process.env[env]) {
      throw new Error(env + " not found!!! at env config...");
    }
  });

  return envs.reduce(
    (acc, env) => ({
      ...acc,
      [env.toLowerCase()]: process.env[env] as string,
    }),
    {} as IEnv
  );
};


export default loadEnv();
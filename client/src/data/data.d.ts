declare module "@/data/data" {
  const siteConfig: {
    name: string;
    logo: string;
    description: string;
  };

  interface API {
    ACTIVITY: {
      GET_ALL_ACTIVITY: string;
    };
    USER: {};
  }
  export { siteConfig, API };
}

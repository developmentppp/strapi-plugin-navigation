declare const navigationService: {
    common: (context: import("strapi-typed").StrapiContext) => import("../../types").ICommonService;
    admin: (context: import("strapi-typed").StrapiContext) => import("../../types").IAdminService;
    client: (context: import("strapi-typed").StrapiContext) => import("../../types").IClientService;
};
export default navigationService;
//# sourceMappingURL=index.d.ts.map
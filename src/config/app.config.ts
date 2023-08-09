interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'IT Consultant', 'Logistics Manager'],
  tenantName: 'Merchant',
  applicationName: 'Ecommerce BIZ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

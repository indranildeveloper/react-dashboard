interface ICommon {
  id: number;
  name: string;
}

interface IProduct {
  id?: number;
  name?: string;
  description?: string;
  picture?: string;
  type?: ICommon;
  categories?: Array<ICommon>;
  implementationEffortText?: null;
  investmentEffort?: string;
  trl?: ICommon;
  video?: string;
  user?: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: 1 | 2 | 3;
    profilePicture: string;
    position: string;
  };
  company?: {
    name: string;
    logo: string;
    address: {
      country: {
        name: string;
      };
      city: {
        name: string;
      };
      street: string;
      house: string;
      zipCode: string;
      longitude: string;
      latitude: string;
    };
  };
  businessModels?: Array<ICommon>;
}

export default IProduct;

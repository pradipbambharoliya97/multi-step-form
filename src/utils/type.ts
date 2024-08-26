export type FormDataType = {
  name: string;
  email: string;
  mobile: string;
  plan: {
    image: string;
    title: string;
    priceM: number;
    priceY: number;
  };
  mode: keyof typeof ModeType;
  addOns: Set<{
    title: string;
    value: string;
    subTitle: string;
    priceM: number;
    priceY: number;
  }>;
};

export enum ModeType {
  mo = 'Monthly',
  yr = 'Yearly',
}

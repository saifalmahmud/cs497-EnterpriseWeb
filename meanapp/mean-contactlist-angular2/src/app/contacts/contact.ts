export class Contact {
  _id?: string;
  name: string;
  major: string;
  email: string;
  phone: {
    mobile: string;
    work: string;
  }
}

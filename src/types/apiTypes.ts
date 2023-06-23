export interface Resources {
  id: string;
  address?: string;
  alias?: string;
  description?: string;
  name?: string;
  status?: string;
  updatedAt?: string;
  type?: string;
  taxId?: string;
}

export interface LocationList {
  pages: number;
  resources: Resources;
}

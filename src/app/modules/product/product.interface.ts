//===============Sub-Interface==========

export type TColorVariant = {
  type: "color";
  value: "Red" | "Black" | "White" | "Blue" | "Purple" | "Silver";
};

export type TSizeVariant = {
  type: "size";
  value: "S" | "M" | "L";
};
export type TVariant = TColorVariant | TSizeVariant;

//==============Main Interface===========
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};

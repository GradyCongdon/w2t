export interface FullTea {
  name: string;
  year: number;
  quantity: number;
  key: string;
  type: Type;
  id: number;
  sku: null;
  tags: string[];
  brand: Brand;
  inStock: boolean;
  forms: Form[];
  description?: string;
  thumbnailURL?: string;
  url?: string;
  version?: string;
  images: ImageFull[];
}

export enum Brand {
  White2Tea = "white2tea",
}

export interface Form {
  name: string;
  price: number;
  inStock: boolean;
  grams: number;
  dpg: number;
  size: Size;
  percentiles: Percentiles;
}

export interface Percentiles {
  size: number;
  type: number;
  typeSize: number;
  all: number;
  dpg: number;
}

export enum Size {
  Brick = "brick",
  Cake = "cake",
  Mini = "mini",
  Sample = "sample",
  Unknown = "unknown",
}

export interface ImageFull {
  key: string;
  url: string;
  predictedType: PredictedType;
  subject?: ImageSubject;
  probability: number;
}

export type PredictedType =
  | "leaf"
  | "soup"
  | "tea"
  | "tong"
  | "wrapper"
  | "underside";

export type ImageSubject =
  | "leaf"
  | "soup"
  | "tea-bottom"
  | "tea-detail"
  | "tea-top"
  | "tong"
  | "chabu"
  | "shirt"
  | "wrapper-bottom"
  | "wrapper-detail"
  | "wrapper-top";

export enum Type {
  BlackTea = "Black Tea",
  Heicha = "Heicha",
  Oolong = "Oolong",
  RawPuerTea = "Raw Puer Tea",
  RipePuerTea = "Ripe Puer Tea",
  WhiteTea = "White Tea",
}
export interface Product {
  name:                   string;
  slug:                   string;
  visible:                boolean;
  productType:            string;
  description:            string;
  sku:                    string;
  weight:                 number;
  weightRange:            Range;
  stock:                  Stock;
  price:                  ConvertedPriceData;
  priceData:              ConvertedPriceData;
  convertedPriceData:     ConvertedPriceData;
  priceRange:             Range;
  costRange:              Range;
  additionalInfoSections: string[];
  ribbons:                any[];
  media:                  Media;
  customTextFields:       any[];
  manageVariants:         boolean;
  productOptions:         string[];
  productPageUrl:         ProductPageURL;
  numericId:              string;
  inventoryItemId:        string;
  discount:               Discount;
  collectionIds:          string[];
  variants:               string[];
  lastUpdated:            Date;
  ribbon:                 string;
  exportProductId:        string;
  _id:                    string;
  _createdDate:           Date;
}

export interface ConvertedPriceData {
  currency:        string;
  price:           number;
  discountedPrice: number;
  formatted:       string;
}

export interface Range {
  minValue: number;
  maxValue: number;
}

export interface Discount {
  type:  string;
  value: number;
}

export interface Media {
  mainMedia: mainMedia;
  items:     string;
}

export interface mainMedia {
  image: url
}

export interface url {
  url : string
}

export interface ProductPageURL {
  base: string;
  path: string;
}

export interface Stock {
  trackInventory:  boolean;
  inStock:         boolean;
  inventoryStatus: string;
}
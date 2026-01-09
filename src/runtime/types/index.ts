export type ShippingRate = {
   "label": string;
   "price": number;
   "minWeight": number;
   "maxWeight": number;
   "isCourier": boolean;
   "zone": "UK" | "EU" | "EU2" | "USA" | "CA" | "ROW"
}

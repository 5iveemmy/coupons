export interface Coupon {
  id: string;
  user_id: number;
  offer_type: string;
  title: string;
  company_logo: string | null;
  company_name: string;
  coupon_discount: number;
  coupon_code: string;
  currency: string;
  payment_type: string;
  amount: string;
  status: number;
  banner_image: string | null;
  company_location: string;
  brand: {
    id: number;
    name: string;
    logo: string | null;
    color: string;
    coupon_off: string;
  };
  created_at: string;
}

interface Purchase {
  id: number;
  supplier_id: number;
  purchase_date: string;
  purchase_no: string;
  tax: number;
  discount: number;
  discount_type: string;
  payment_type: string;
  purchase_status: string;
  company_id: number;
  remarks: string;
  u_created_id: number;
  created_at: string;
  updated_at: string;
  total_amount: number;
  supplier: Supplier;
  company: Company;
  purchase_detail: PurchaseDetail[];
}
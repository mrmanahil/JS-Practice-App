import {
  GET_CUSTOMER,
  GET_INVOICE,
  UPDATE_CUSTOMER,
  CREATE_CUSTOMER,
  DELETE_CUSTOMER,
  GET_TOTAL_INVESTMENT,
  SHOWINVESTMENTS,
  SEARCH_BY_DATE,
  GET_INVOICE_BY_EMAIL,
  NO_OF_USERS,
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_BY_TYPE,
  SEND_INVOICE,
  GET_INVOICE_BY_NAME,
  DELETE_INVOICE,
  GET_CUSTOMER_NAME,
  SEARCH_BY_CUSTOMER_NAME,
  GET_CUSTOMER_INDIVIDUAL_INVOICE,
  FILTER_USER_BY_EMAIL_NAME,
  GET_PRODUCT_SUBSCRIPTION_DATA,
  FILTER_SUBSCRIBER_BY_NAME_EMAIL,
  GET_EVENTS,
} from "../const/customer.const";

const InitialData = {
  count: {},
  total: "",
  data: [],
  events: [],
  userInvestment: [],
  noOfUsers: [],
  products: [],
  productDetails: [],
  productByType: [],
  getInvoiceData: [],
  getCustomer: [],
  getCustomerByName: [],
  getIndividualCustomerInvoice: [],
  getAllSubscriptionReq: [],
};
const customerReducer = (state = InitialData, action) => {
  // console.log(action.payload);
  let arr = [...state.data];
  switch (action.type) {
    case GET_CUSTOMER:
      return {
        ...state,
        data: action.payload,
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action?.payload,
      };

    default:
      return { ...state };
  }
};
export default customerReducer;

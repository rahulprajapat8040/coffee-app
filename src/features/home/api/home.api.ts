import { API_ENDPOINT } from "@/lib/constants/routes.constant";
import { request } from "../../../api/axios/request";
import { IApiResponse } from "../../../api/axios/base-res.interface";
import { IHomeRes } from "@/lib/interfaces/home-res.interface";
import { ICoffessRes } from "@/lib/interfaces/coffes.interface";
import { GetFilterUrl } from "@/lib/helper/function.helper";

export const homeApi = {
  getCategories() {
    return request<IApiResponse<IHomeRes>>({
      url: `${API_ENDPOINT.USER}/home`,
      method: 'GET',
    });
  },

  getCoffees(qeuryData: { categoryId: string | null; page: number }) {
    const query = GetFilterUrl(qeuryData);
    return request<IApiResponse<ICoffessRes>>({
      url: `${API_ENDPOINT.PRODUCT}/coffee?${query ? query : ''}`,
      method: 'GET',
    });
  },
};
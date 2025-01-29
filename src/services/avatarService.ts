import type { AxiosRequestConfig } from "axios";
import { ApiService } from "./apiService";

export type GetAvatarResponse = {
  image: string;
};
class AvatarService extends ApiService {
  public constructor(baseReqConfig: AxiosRequestConfig) {
    super(baseReqConfig);
  }
  public getAvatar = async (name: string) => {
    const [firstName, lastName] = name.split(" ");
    const firstPlusLastName = lastName ? `${firstName}+${lastName}` : firstName;
    const res = await this.makeRequest<Blob>({
      url: `api/?name=${firstPlusLastName}&background=0D8ABC&color=fff`,
      responseType: "blob",
    });
    const image = URL.createObjectURL(res);
    return { image };
  };
}

export const avatarService = new AvatarService({
  baseURL: "https://ui-avatars.com/",
});

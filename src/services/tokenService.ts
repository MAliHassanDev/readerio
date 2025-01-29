class TokenService {
  public constructor(
    private readonly storage: Storage,
    private readonly tokenName = "jwt_token",
  ) {}

  public setToken(token: string) {
    this.storage.setItem(this.tokenName, token);
  }

  public getAuthToken = () => {
    const token = this.storage.getItem(this.tokenName);
    return `Bearer ${token}`;
  };

  public deleteToken = () => {
    this.storage.removeItem(this.tokenName);
  };
}

export const tokenService = new TokenService(localStorage);

class AuthRepositoryImpl {
  // Simulate a login function with a delay
  async login(username: string, password: string): Promise<AuthResponse> {
    // Simulate a delay like an API call
    await this.simulateApiDelay();

    // Validate inputs
    if (!username || !password) {
      throw new Error("Username and password are required.");
    }
    if (username.toLowerCase() !== "test" || password !== "1234") {
      throw new Error("Invalid username or password.");
    }

    // Example of a successful login response (simulate API response)
    const response: AuthResponse = {
      token:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTczOTM5MzMxOCwiZXhwIjoxNzM5Mzk2OTE4fQ.kOAwppg5-wKCAutM56gVbIbZiV49OlM61PqZvSgHJTw",
      refreshToken: "refresh_token_example",
    };

    return response;
  }

  // Simulate a delay like an API call
  private simulateApiDelay(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 1000); // Simulate a 1 second delay
    });
  }
}

export const AuthRepository = new AuthRepositoryImpl();

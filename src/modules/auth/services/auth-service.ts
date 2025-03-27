import { User } from "@models/index";
import jwt from "jsonwebtoken";

class AuthService {

  public async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.validPassword(password))) {
      throw new Error("Invalid email or password");
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: "1h" });
    return token;
  }
  
    public async logout(token: string): Promise<void>{
        return;
    }
}

export default new AuthService();
import { Request, Response } from "express";
import { UserModel as User, RolModel as Rol } from "../models/exports";

export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, password, roles } = req.body;

    const rolesIterable = await Rol.find({ name: { $in: roles } });

    const user = new User({
      username,
      email,
      password,
      roles: rolesIterable.map((role) => role._id),
    });

    //encryptPassword
    user.password = await User.encryptPassword(user.password);

    const savedUser = await user.save();
    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      password: savedUser.password,
      roles: savedUser.roles,
    });
  } catch (error) {}
}

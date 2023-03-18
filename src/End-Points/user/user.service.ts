import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

import { UpdateUserDto } from './dto/update-user.dto';
import { UserSignupDto } from './dto/user-signup.dto';
import { UserLoginDto } from './dto/user-login.dto';


@Injectable()
export class UserService {

  constructor(@InjectModel('Users') private Users, private jwtService: JwtService) { }


  private async findUserByEmail(email: string) {

    const user = await this.Users.findOne({ email });
    console.log(user);

    return user;
  }

  //'This action adds a new user';
  async signup(userSignupDto: UserSignupDto) {
    // 1-check if user exists
    const user = await this.findUserByEmail(userSignupDto.email);
    if (user) return { message: 'error, this email already exists' }
    // 2-hashing password
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(userSignupDto.password, salt);
    userSignupDto.password = hashedPassword;
    // 3-add user in database
    const newUser = await this.Users.create(userSignupDto);

    return { message: 'success, user added successfully', newUser }
  }

  //'This action logins a user';
  async login(userLoginDto: UserLoginDto, res: Response) {
    // 1-check if user exists
    const user = await this.findUserByEmail(userLoginDto.email);
    if (!user) return { message: 'error, invalid email or password' };
    // 2-check if password matches in database
    let isPassword = await bcrypt.compare(userLoginDto.password, user.password);
    if (!isPassword) return { message: 'error, invalid email or password' };
    // 3-send token in header
    let token = await this.jwtService.signAsync({ name: user.name, age: user.age, email: user.email, isAdmin: user.isAdmin }, { secret: 'secret' })
    res.header("x-auth-token", token);

    return { message: 'succes, you logged in successfully', token: token }
  }




  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

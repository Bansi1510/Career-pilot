import type { Request, Response } from "express";
import type { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import pool from "../config/db";
import { generateToken } from "../utils/generateToken";
import { sendOtp } from "../utils/sendOtp";
import dotenv from 'dotenv';
dotenv.config();

export const createUser = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, mobile_no, password } = req.body;
    
    const Record=await pool.query("SELECT * FROM users WHERE email=$1",[email])

    if(Record.rows.length>0){
      return res.status(409).json({success:false,message:"user with this email already registered"});
    }
    console.log(process.env.EMAIL_USER)
    console.log(process.env.EMAIL_PASS)
    const DuplicateMobile=await pool.query('SELECT * FROM users WHERE mobile_no=$1',[mobile_no])
    if(DuplicateMobile.rows.length>0){
      return res.status(409).json({success:false,message:"user with this mobile number already registered"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await pool.query(
      `
      INSERT INTO users(
      first_name,last_name,email,mobile_no,password,otp,otp_expires_at
      )
      VALUES($1,$2,$3,$4,$5,$6,NOW()+INTERVAL '5 minutes')
      `,
      [first_name, last_name, email, mobile_no, hashedPassword, otp],
    );

    sendOtp(email, first_name, otp);

    res.status(201).json({
      success: true,
      message: "OTP sent successfully",
      email:process.env.EMAIL_USER,
      passkey:process.env.EMAIL_PASS
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"Internal server error",error:error});

    res.status(500).json({error:error});
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    
    console.log(process.env.EMAIL_USER)
    console.log(process.env.EMAIL_PASS)
    const result = await pool.query(
      `
      SELECT * FROM users
      WHERE email=$1
      AND otp=$2
      AND otp_expires_at > NOW()
      `,
      [email, otp],
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    await pool.query(
      `
      UPDATE users
      SET is_verified=true,
      otp=NULL,
      otp_expires_at=NULL
      WHERE email=$1
      `,
      [email],
    );

    generateToken(result.rows[0].id, res);

    res.json({
      success: true,
      message: "Account verified",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"Internal server error"});
  }
};

export const resendOtp = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const ReSend = await pool.query(
    `UPDATE users SET otp=$1,otp_expires_at=NOW()+INTERVAL '5 minutes' WHERE email=$2 RETURNING *`,
    [otp, email],
  );

  const first_name = ReSend.rows[0].first_name;

  sendOtp(email, first_name, otp);

  res.status(201).json({
    success: true,
    message: "OTP Resent successfully",
  });
  
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"Internal server error"});
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const user = result.rows[0];

    const matched = await bcrypt.compare(password, user.password);

    if (!matched) {
      return res.status(400).json({
        success: false,
        message: "Wrong password",
      });
    }

    generateToken(user.id, res);

    res.status(200).json({
      success: true,
      message:`Welcome back ${user.first_name}`,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"Internal server error"});
  }
};

type AuthRequest = Request & { user?: JwtPayload | { id: string; email: string } };

export const updateUser = async (req: AuthRequest, res: Response) => {
  try {

  const id = req.user?.id;

  const { first_name, last_name, mobile_no } = req.body;

  const result = await pool.query(
    `
    UPDATE users
    SET first_name=$1,
    last_name=$2,
    mobile_no=$3
    WHERE id=$4
    RETURNING *
    `,
    [first_name, last_name, mobile_no, id],
  );

  res.json({success:true,message:"updated successfully"});
   } catch (error) {
    res.json({success:false,message:"Internal server error"})
  }
};

export const logout = (req: Request, res: Response) => {
  res.cookie("token", "", {
    maxAge: 0,
  });

  res.json({
    success: true,
    message: "Logged out",
  });
};

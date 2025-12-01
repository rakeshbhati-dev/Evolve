import User from "../models/user.model.js";

const register = async (req, res) => {
    const { username,password } = req.body
    const email=req.body.email.toLowerCase()
    try {
        const user = await User.create({ username, email, password })
        return res.status(201).json({ message: "Account Created Successfully.", user: user })
    } catch (error) {
        if(error.name==='ValidationError') return res.status(400).json({message:error.message,error:error.errors});
        if(error.code===11000) return res.status(409).json({message:'Email Already Exist',error:error.errorResponse})
        return res.status(500).json({ message: "Something went wrong", error: error })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const existedUser = await User.findOne({ email: email })
        if (!existedUser) return res.status(401).json({ message: "No user record found for the specified email." });
        else if (existedUser.password !== password) return res.status(401).json({ message: "Invalid Password" });
        else return res.status(200).json({message:"Login Successfully",user:existedUser})
    } catch (error) {
        if(error.name==='ValidationError') return res.status(400).json({message:error.message,error:error.errors});
        return res.status(500).json({ message: "Something went wrong", error: error })
    }
}

export { register,login }
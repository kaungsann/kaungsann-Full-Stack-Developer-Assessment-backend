const passport = require("passport");
const { Strategy } = require("passport-local");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");

passport.use(
  new Strategy(async (username, password, done) => {
    console.log("user name is ", username);

    console.log("password is a", password);
    try {
      let user = await User.findOne({ username: username });

      // console.log("user is a", userInfo);
      // let user = userInfo.toObject();
      if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "user not found");
      }
      const isMatch = await bcrypt.compare(password, user.password);

      // console.log("isMatch is a", isMatch);
      if (!isMatch) {
        return done(null, false, "incorrect password");
      }
      done(null, user, "login success");
    } catch (error) {
      done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  // Store only the user ID in the session
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Fetch the full user object using the ID stored in the session
    const user = await User.findById(id);
    done(null, user); // Attach the full user object to the session
  } catch (error) {
    done(error);
  }
});

// /**
//  * Create a user
//  * @param {Object} userBody
//  * @returns {Promise<User>}
//  */
// const createUser = async (userBody) => {
//   if (await User.isEmailTaken(userBody.email)) {
//     throw new ApiError(httpStatus.BAD_REQUEST, "Email already taken");
//   }
//   try {
//     console.log("ser body is a", userBody);

//     const hashedPassword = await bcrypt.hash(userBody.password, 8);
//     const newUser = {
//       username: userBody.username,
//       email: userBody.email,
//       password: hashedPassword,
//       isMfaActive: false,
//     };
//     console.log("new user is a", newUser);

//     return User.create(newUser);
//   } catch (error) {
//     console.error("Error during user registration:", error);
//     throw new ApiError(httpStatus.NOT_FOUND, "Error in Registering");
//   }
// };

// onst loginUser = async (username, password) => {
//   console.log("authenticate user is a", username, password);
//   const user = {
//     message: "user login is successfully",
//     username,
//     isMfaActive: false,
//   };
//   return user;
// };

// const authStatus = async (user) => {
//   console.log("authenticate user is a", user);

//   if (user) {
//     const userInfo = {
//       message: "user status is successfully",
//       username: user.username,
//       isMfaActive: false,
//     };
//     return userInfo;
//   } else {
//     throw new ApiError(httpStatus.UNAUTHORIZED, "authorized incorrect");
//   }
// };

// const userLogout = async (req) => {
//   console.log("authenticate user is a", req.user);

//   if (req.user) {
//     return new Promise((resolve, reject) => {
//       req.logout((error) => {
//         if (error) {
//           reject(new ApiError(httpStatus.UNAUTHORIZED, "User not logged in"));
//         } else {
//           resolve({ message: "Logout successful" });
//         }
//       });
//     });
//   } else {
//     throw new ApiError(httpStatus.UNAUTHORIZED, "Authorization incorrect");
//   }
// };

// router.post("/login", passport.authenticate("local"), authController.login);

// //Auth Status Route
// router.get("/status", authController.authStatus);

// //Logout Route
// router.post("/logout", authController.logout);

// //2FA/setup Route
// router.post(
//   "/two-fa-setup",
//   (req, res, next) => {
//     if (req.isAuthenticated) return next();
//     throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized");
//   },
//   authController.twoFactorSetup
// );

// //verify Route
// router.post(
//   "/two-fa-setup/verify",
//   (req, res, next) => {
//     if (req.isAuthenticated) return next();
//     throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized");
//   },
//   authController.resetTwoFactor
// );

// //reet Route
// router.post(
//   "/two-fa-setup/reset",
//   (req, res, next) => {
//     if (req.isAuthenticated) return next();
//     throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized");
//   },
//   authController.resetTwoFactor
// );

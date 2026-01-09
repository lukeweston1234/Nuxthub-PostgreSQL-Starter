import { getUserByEmail, registerUserByEmail } from "~~/server/utils/db";

export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    const { email, name, picture } = user;

    const userRes = await getUserByEmail(email);

    // Account exists
    if (userRes) {
      await setUserSession(event, {
        user: {
          id: userRes.id,
          email: email,
          name: name,
          picture: picture,
        },
      });
    }
    // Account does not exist, registration flow
    else {
      const newUser = await registerUserByEmail(email, name, "", picture);
      if (!newUser) throw new Error("Could not register user!");
      await setUserSession(event, {
        user: {
          id: newUser.id,
          email: email,
          name: name,
          picture: picture,
        },
      });
    }
    return sendRedirect(event, "/");
  },
});

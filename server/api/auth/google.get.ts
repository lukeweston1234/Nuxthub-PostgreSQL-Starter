export default defineOAuthGoogleEventHandler({
  async onSuccess(event, { user }) {
    const { email, name, picture } = user;
    await setUserSession(event, {
      user: {
        id: 1,
        email: email,
        name: name,
        picture: picture,
      },
    });
    return sendRedirect(event, "/");
  },
});
